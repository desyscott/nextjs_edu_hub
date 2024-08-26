// MainArea.js
import React from 'react';
import NewsletterCard from '@/components/Dashboard/NewsletterCard';
// import Image from "next/image"

// import { FaCog, FaEdit, FaTrash,FaTrashAlt } from 'react-icons/fa';

const MainArea = () => {
  return (
    <div className="p-4 flex-grow">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
      <div className="flex justify-between items-center flex-wrap mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Newsletters</h1>
        <button className="bg-[#582BE8] text-white px-8 py-2 rounded-md hover:bg-[#5224e9]">
          New Post
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-4">
        <ul className="flex border-b">
          <li className="mr-6">
            <a href="#" className="text-purple-600 font-bold border-b-2 border-purple-600 pb-2">
              Published
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 pb-2">
              Draft
            </a>
          </li>
        </ul>
      </div>

 

        <div className="mt-4">
        <NewsletterCard
            title="Lorem ipsum dolor sit amet consectetur."
            description="Lorem ipsum dolor sit amet consectetur. Pharetra enim cras lorem ac proin. Augue mauris aliquet ac sodales sit. Penatibus ac odio hendrerit posuere pharetra integer aliquet. Commodo donec tincidunt id sed at"
            imageSrc="/HeroImage.jpeg"
          />
          <NewsletterCard
            title="Lorem ipsum dolor sit amet consectetur."
            description="Lorem ipsum dolor sit amet consectetur. Pharetra enim cras lorem ac proin. Augue mauris aliquet ac sodales sit. Penatibus ac odio hendrerit posuere pharetra integer aliquet. Commodo donec tincidunt id sed at"
            imageSrc="/dashboardImage2.jpeg"
          />
        </div>  
      </div>
    </div>
  );
};

export default MainArea;