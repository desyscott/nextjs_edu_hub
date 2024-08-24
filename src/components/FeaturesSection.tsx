
'use client'
 
import { useRouter } from 'next/navigation'
import Image from "next/image";

const FeaturesSection = () => {

  const router = useRouter()

    return (
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-black text-3xl font-bold">Why your ward should be here</h2>
            <p className="text-gray-600">Providing an exceptional educational experience for success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="/Group2182.png" 
              title="Outstanding Faculty" 
              description="Our teachers are highly trained and passionate about education. They are committed to ensuring that your child receives the best possible support and guidance throughout their academic journey." 
            />
            <FeatureCard 
              icon="/Group2189.png" 
              title="Global Curriculum" 
              description="Our international curriculum is designed to equip students with the skills and knowledge they need to thrive in a globalized world. We offer a wide range of subjects and programs that are tailored to meet the unique needs of each individual student." 
            />
            <FeatureCard 
              icon="/Group2190.png" 
              title="State-of-the-Art Facilities" 
              description="Our school is equipped with modern and innovative facilities, including science and computer labs, libraries, sports grounds, and more. These facilities provide students with the tools they need to excel in their studies and develop their talents." 
            />
          </div>
          <div className="text-center mt-12">
            <button 
             type="button"
             onClick={() => router.push('/dashboard')}
            className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Enroll your ward now →
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string; }) => {
    return (
      <div className="text-center">
        <div className="flex justify-center mb-4">
        <div className=" bg-[#F1F8FE] p-9 rounded-full shadow-md w-20 h-20 relative  " style={{ width: '80px', height: '80px' }}>
        <Image src={icon} alt={title} layout="fill" objectFit="contain" />
      </div>
      </div>
        <h3 className="text-black mb-2 text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default FeaturesSection;
  