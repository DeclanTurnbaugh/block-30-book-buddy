import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
        );
        const data = await response.json();
        setBook(data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  );
};

export default SingleBook;
