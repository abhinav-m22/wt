import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/books/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, category, price }),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/');
        } else {
          throw new Error('Failed to add book');
        }
      })
      .catch((error) => console.error('Error adding book:', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
