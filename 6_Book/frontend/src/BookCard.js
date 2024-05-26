import React, { useState } from 'react';
import EditBookModal from './EditModal';

function BookCard({ bookName, price, category, author }) {
  const [isEditing, setIsEditing] = useState(false);

  const openEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{bookName}</h3>
      <p className="text-gray-700 mb-2"><strong>Price:</strong> ${price}</p>
      <p className="text-gray-700 mb-2"><strong>Author:</strong> {author}</p>
      <p className="text-gray-700 mb-2"><strong>Category:</strong> {category}</p>
      <button onClick={openEditModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
      {isEditing && <EditBookModal book={{ bookName, price, category, author }} onClose={closeEditModal} />}
    </div>
  );
}

export default BookCard;
