import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      fetch('http://localhost:3001/books/get')
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error('Error fetching books:', error));
  }, [navigate]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/books/delete/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setBooks(books.filter((book) => book.id !== id));
          console.log('Book deleted successfully');
        } else {
          throw new Error('Failed to delete book');
        }
      })
      .catch((error) => console.error('Error deleting book:', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">Welcome to the Home Page</h1>
      <div className="mb-4 flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/add-book')}
        >
          Add Book
        </button>
        <button
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          View Books
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Books:</h2>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="border p-4">
            <BookCard
              bookName={book.title}
              price={book.price}
              category={book.category}
              author={book.author}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
