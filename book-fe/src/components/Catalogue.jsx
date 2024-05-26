import React, { useEffect, useState } from 'react';
import './Catalogue.css'

function Catalogue() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:8080/api/books');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="Catalogue">
      <h2>Book Catalogue</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <p>${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
