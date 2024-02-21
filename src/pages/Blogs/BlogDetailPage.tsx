import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      Blog Detail Page
      {id}
    </div>
  );
};

export default BlogDetailPage;
