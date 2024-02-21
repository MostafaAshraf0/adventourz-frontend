import { useParams } from "react-router-dom";

const TourDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      Tour Detail Page
      {id}
    </div>
  );
};

export default TourDetailPage;
