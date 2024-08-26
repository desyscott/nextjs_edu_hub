// components/StudentJoinSection.tsx


'use client'
 
import { useRouter } from 'next/navigation'

import Image from "next/image";

const EnrollSection= () => {

  const router = useRouter()
  
  return (
    <section className="relative flex flex-col items-center justify-center py-20 bg-[#FFFFFF] overflow-hidden">
      {/* Centered Text and Button */}
      <div className="text-center  mb-10">
        <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Enroll your ward to join
        </h3>
        <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          over 3000+ successful students
        </h3>
        <button 
          type="button"
          onClick={() => router.push('/dashboard')}
        className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Enroll your ward now &rarr;
        </button>
      </div>

      {/* Images Curved to Left */}
      <div className="absolute flex flex-col items-center space-y-4 left-36 ">
        <div className="transform  translate-x-20 translate-y-20 hidden lg:block">
          <Image
            src="/Assets/images/Ellipse1e1.png" // Replace with actual path
            alt="Student 1"
            width={96}
            height={96}
            className="rounded-full border-4 border-white" 
          />
        </div>
        <div className="transform lg:translate-x-36 lg:translate-y-16  translate-x-32 translate-y-36">
          <Image
            src="/Assets/images/Ellipse2e2.png" // Replace with actual path
            alt="Student 2"
            width={64}
            height={64}
            className="rounded-full border-4 border-white"
          />
        </div>
        <div className="transform lg:translate-x-56 lg:translate-y-3 translate-x-48 translate-y-16">
          <Image
            src="/Assets/images/Ellipse3e3.png" // Replace with actual path
            alt="Student 3"
            width={64}
            height={64}
            className="rounded-full border-4 border-white"
          />
        </div>
        <div className="transform translate-x-80 -translate-y-7  hidden lg:block">
          <Image
            src="/Assets/images/Ellipse4e4.png" // Replace with actual path
            alt="Student 4"
            width={96}
            height={96}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Images Curved to Right */}
      <div className="absolute flex flex-col items-center space-y-4 right-36">
        <div className="transform  -translate-x-20 translate-y-20 hidden lg:block">
          <Image
            src="/Assets/images/Ellipse1e8.png" // Replace with actual path
            alt="Student 5"
            width={96}
            height={96}
            className="rounded-full border-4 border-white"
          />
        </div>
        <div className="transform  lg:-translate-x-36 lg:translate-y-16 -translate-x-36 translate-y-36">
          <Image
            src="/Assets/images/Ellipse2e7.png" // Replace with actual path
            alt="Student 6"
            width={64}
            height={64}
            className="rounded-full border-4 border-white"
          />
        </div>
        <div className="transform lg:-translate-x-56 lg:translate-y-4 -translate-x-52 translate-y-16">
          <Image
            src="/Assets/images/Ellipse3e6.png" // Replace with actual path
            alt="Student 7"
            width={64}
            height={64}
            className="rounded-full border-4 border-white"
          />
        </div>
        <div className="transform -translate-x-80 -translate-y-7  hidden lg:block">
          <Image
            src="/Assets/images/Ellipse4e5.png" // Replace with actual path
            alt="Student 8"
            width={96}
            height={96}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default EnrollSection
;
