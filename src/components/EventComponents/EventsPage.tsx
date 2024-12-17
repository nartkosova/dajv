import { useParams } from "react-router-dom";
import initialEvents from "./data";

const EventsPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  if (!title) {
    return <div>Post not found.</div>;
  }

  const decodedTitle = decodeURIComponent(title);
  const post = initialEvents.find(
    (b) => b.title.replace(/\s+/g, "-").toLowerCase() === decodedTitle,
  );

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center bg-white-100 py-28 px-8 lg:px-20"></div>
  );
};

export default EventsPage;
