import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get("query");

  return (
    <div>
      <h2>{`Search results for "${searchQuery}"`}</h2>
    </div>
  );
};

export default SearchResult;
