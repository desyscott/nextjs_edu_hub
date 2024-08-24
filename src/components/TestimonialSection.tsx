import Image from "next/image";

import React, { FC } from 'react';

const TestimonialSection: FC = () => {
  return (
    <section className="bg-[#052326] py-16 flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 md:flex md:items-center md:space-x-8">
        {/* Testimonial Text */}
        <div className="md:w-2/3 text-white">
        <blockquote className="text-2xl md:text-3xl font-medium mb-4">
            {/* Replaced single quotes with &rsquo; */}
            &ldquo; We appreciate the school&rsquo;s emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. &rdquo;
          </blockquote>
          <p className="text-lg font-light">
            Mr. Nathan Offei Ansah, Parent
          </p>
        </div>

        {/* Testimonial Image */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
          <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-lg shadow-md">
          <Image
              src="/Assets/images/TestimonialImage.jpeg" // Path to the image
              alt="Nathan Offei Ansah"
              layout="fill" // This makes the image fill the container
              objectFit="cover" // Ensures the image covers the container without stretching
              className="rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
