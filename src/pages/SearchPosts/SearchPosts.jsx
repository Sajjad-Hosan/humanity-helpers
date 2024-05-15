import VolunteerCard from "../../components/VolunteerCard/VolunteerCard";
import useAuth from "../../hooks/useAuth";

const SearchPosts = () => {
  const { filter } = useAuth();
  return (
    <div className=" pt-10 px-8">
      <h1 className="text-4xl mb-10">Search Post</h1>
      <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
        {filter.map((item, i) => (
          <VolunteerCard key={i} post={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPosts;
