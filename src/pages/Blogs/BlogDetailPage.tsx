import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatDate } from "@/lib/utils";
import BlogDetailLoading from "@/components/loading/BlogDetailLoading";

interface BlogContentProps {
  SectionTitle: string;
  Content: string;
}

interface BlogProps {
  ID: string;
  Title: string;
  Date: string;
  Description: BlogContentProps[];
}

const CACHE_KEY = "blogDetail";
const CACHE_EXPIRY_KEY = "blogDetailExpiry";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const BlogDetailPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [blogDetails, setBlogDetails] = useState<BlogProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) {
        setBlogDetails(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      const now = new Date();
      const expiry = localStorage.getItem(CACHE_EXPIRY_KEY + id);
      if (expiry && now.getTime() < Number(expiry)) {
        const cachedData = localStorage.getItem(CACHE_KEY + id);
        if (cachedData) {
          setBlogDetails(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
      }

      try {
        const url = import.meta.env.VITE_SHEETS_SCRIPT_URL; // Ensure you have the right URL
        const response = await axios.get(`${url}?sheetName=Blogs&ID=${id}`);

        console.log("API Response:", response.data); // Debugging line to check the API response

        if (response.data && response.data.length > 0) {
          const blogData = response.data[0];
          localStorage.setItem(CACHE_KEY + id, JSON.stringify(blogData));
          localStorage.setItem(
            CACHE_EXPIRY_KEY + id,
            String(now.getTime() + CACHE_DURATION),
          );
          setBlogDetails(blogData);
        } else {
          setBlogDetails(null); // Set to null if no matching blog is found
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setBlogDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) {
    return <BlogDetailLoading />;
  }

  if (!blogDetails) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div className="mx-auto my-10 max-w-4xl px-4 lg:px-0">
      <article>
        <header className="mb-10">
          <h1 className="mb-3 text-3xl font-bold leading-tight lg:text-5xl">
            {blogDetails.Title}
          </h1>
          <p className="text-lg text-gray-500">
            {formatDate(blogDetails.Date)}
          </p>
        </header>

        {blogDetails.Description && blogDetails.Description.length > 0 ? (
          blogDetails.Description.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
                {section.SectionTitle}
              </h2>
              <p className="text-base leading-relaxed text-gray-700 lg:text-lg">
                {section.Content}
              </p>
            </section>
          ))
        ) : (
          <p>No content available.</p>
        )}
      </article>
    </div>
  );
};

export default BlogDetailPage;
