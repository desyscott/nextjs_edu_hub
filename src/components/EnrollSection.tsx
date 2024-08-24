// components/EnrollSection.tsx

import React, { FC } from 'react';

const EnrollSection: FC = () => {
  return (
    <section className="relative bg-white py-20 flex justify-center items-center overflow-hidden">
         <div className="container mx-auto px-4 md:px-20 lg:px-32 text-center">
      {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Enroll your ward to join
          <br />
          <span className="text-xl md:text-2xl font-medium">
            over 3000+ successful students
          </span>
        </h2>

        {/* Enroll Button */}
        <div className="mt-6">
          <button className="px-8 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800">
            Enroll your ward now →
          </button>
        </div>

      {/* Left Circular Images */}
      <div className="absolute flex flex-col space-y-4 left-10 transform -translate-y-1/4">
        <div className="circle-image w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
          <img src="/images/student1.jpg" alt="Student 1" className="w-full h-full object-cover" />
        </div>
        <div className="circle-image w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg transform translate-x-4 -translate-y-4">
          <img src="/images/student2.jpg" alt="Student 2" className="w-full h-full object-cover" />
        </div>
        <div className="circle-image w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg transform translate-x-6 -translate-y-6">
          <img src="/images/student3.jpg" alt="Student 3" className="w-full h-full object-cover" />
        </div>
        <div className="circle-image w-20 h-20 md:w-18 md:h-18 rounded-full overflow-hidden shadow-lg transform translate-x-8 -translate-y-8">
          <img src="/images/student4.jpg" alt="Student 4" className="w-full h-full object-cover" />
          student 4
        </div>
      </div>

      {/* Right Circular Images */}
      <div className="absolute flex flex-col space-y-4 right-10 transform -translate-y-1/4">
        <div className="circle-image w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
          <img src="/images/student5.jpg" alt="Student 5" className="w-full h-full object-cover" />
        </div>
        <div className="circle-image w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg transform -translate-x-4 -translate-y-4">
          <img src="/images/student6.jpg" alt="Student 6" className="w-full h-full object-cover" />
        </div>
        <div className="circle-image w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg transform -translate-x-6 -translate-y-6">
          <img src="/images/student7.jpg" alt="Student 7" className="w-full h-full object-cover" />
        </div>
        <div className="circle-image w-14 h-14 md:w-18 md:h-18 rounded-full overflow-hidden shadow-lg transform -translate-x-8 -translate-y-8">
          <img src="/images/student8.jpg" alt="Student 8" className="w-full h-full object-cover" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default EnrollSection;
