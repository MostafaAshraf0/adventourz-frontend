import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-10 px-10 lg:px-32">
      <h3 className="text-2xl font-bold lg:text-4xl">
        Blog {id}
        <p className="text-sm font-normal text-gray-400">17 Feb, 2024</p>
      </h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        dignissimos beatae assumenda eligendi ad itaque nulla cumque explicabo
        nemo libero, aspernatur atque fugit odio amet ratione animi accusamus
        nisi, reiciendis ut sapiente. Obcaecati beatae, eveniet debitis delectus
        accusantium distinctio ipsa reprehenderit odio perspiciatis quae. Esse
        vel deserunt iste libero atque praesentium, cupiditate ipsam quae
        similique culpa exercitationem architecto velit facere ab suscipit
        repellat laboriosam quia cumque perspiciatis est asperiores molestiae
        repudiandae numquam voluptatum. Dolor architecto, nemo tempora odio quia
        iste eveniet exercitationem voluptatibus ab non nobis nisi? Vel
        laboriosam reiciendis facilis rem, amet excepturi cum beatae dolore
        numquam omnis eaque.
      </p>
    </div>
  );
};

export default BlogDetailPage;
