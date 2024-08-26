
'use client';
import { motion } from "framer-motion"


const HeroSection= () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center"
     style={{ backgroundImage: "url('/HeroImage.jpeg')" }}>
     <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-20 lg:px-32">
        <div className="text-white max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Join us on this exciting journey of discovery and become a hero in your own story.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
           
            <div className="flex space-x-2">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
