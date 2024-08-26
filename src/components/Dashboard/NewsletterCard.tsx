"use client"
import { useState } from 'react';
import { FaCog, FaEdit, FaTrash } from 'react-icons/fa';
import Image from "next/image"



interface NewsletterCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const NewsletterCard = ({ title, description, imageSrc }:NewsletterCardProps) => {
  
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  return (
    <div className="space-y-1 p-4 border-b flex flex-col bg-gray-50">
      <div className='flex'>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-[#292929]">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <Image 
      src={imageSrc} 
      alt="Newsletter Image"
      width={150}
      height={150}
      className="rounded-md object-cover"
      />
      </div>
      <div className="relative">
        <button onClick={() => setIsOptionsVisible(!isOptionsVisible)} 
          className="text-gray-500 hover:text-gray-700 mb-2"
          >
          <FaCog />
        </button>
        {isOptionsVisible && (
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
            <button className="p-2 w-full flex items-center text-gray-500 hover:text-gray-700 mb-2">
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