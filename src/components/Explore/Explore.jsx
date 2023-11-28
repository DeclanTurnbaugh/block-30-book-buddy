import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

const Explore = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="explore-contain">
      <h2>Explore Books</h2>
      <div className="book-contain">
        {books.map((book) => (
          <Link key={book.id} to={`/single-book/${book.id}`}>
            <img src={book.coverimage} alt={book.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
