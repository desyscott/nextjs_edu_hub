"use client"
import { useState } from 'react';
import { FaCog, FaEdit, FaTrash } from 'react-icons/fa';

const NewsletterCard = ({ title, description, imageSrc }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  return (
    <div className="p-4 border-b flex">
      <div className="flex-grow">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
      </div>
      <img src={imageSrc} alt="Newsletter Image" className="w-24 h-24 rounded-lg ml-4" />
      <div className="relative">
        <button onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
          <FaCog />
        </button>
        {isOptionsVisible && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
            <button className="p-2 w-full flex items-center">
              <FaEdit className="mr-2" /> Edit
            </button>
            <button className="p-2 w-full flex items-center text-red-500">
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterCard;
