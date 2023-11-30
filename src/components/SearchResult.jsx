import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`
        );
        const data = await response.json();

        data.books.forEach((book) => {
          if (book.title.toLowerCase() === searchQuery.toLocaleLowerCase()) {
            setSearchResult(book);
          }
        });
      } catch (error) {
        setError("An unexpected error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search results for {searchQuery}</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {searchResult && (
        <Link key={searchResult.id} to={`/single-book/${searchResult.id}`}>
          <img src={searchResult.coverimage} alt={searchResult.title} />
        </Link>
      )}
    </div>
  );
};

export default SearchResult;
