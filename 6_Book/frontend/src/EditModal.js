import React, { useState } from 'react';

function EditBookModal({ book, onClose, onUpdate }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [category, setCategory] = useState(book.category);
  const [price, setPrice] = useState(book.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/books/update/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, category, price }),
    })
      .then((response) => {
        if (response.ok) {
          onUpdate({ id: book.id, title, author, category, price });
          onClose();
        } else {
          throw new Error('Failed to update book');
        }
      })
      .catch((error) => console.error('Error updating book:', error));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>
            <input type="text" id="title" className="w-full px-3 py-2 border rounded shadow-sm" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-bold mb-2">Author</label>
            <input type="text" id="author" className="w-full px-3 py-2 border rounded shadow-sm" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-bold mb-2">Category</label>
            <input type="text" id="category" className="w-full px-3 py-2 border rounded shadow-sm" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-bold mb-2">Price</label>
            <input type="number" id="price" className="w-full px-3 py-2 border rounded shadow-sm" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            <button type="button" onClick={onClose} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBookModal;
