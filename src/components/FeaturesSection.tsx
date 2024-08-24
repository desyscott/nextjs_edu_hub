
import Image from "next/image";

const FeaturesSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-black text-3xl font-bold">Why your ward should be here</h2>
            <p className="text-gray-600">Providing an exceptional educational experience for success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="/graduation-hat.png" 
              title="Outstanding Faculty" 
              description="Our teachers are highly trained and passionate about education. They are committed to ensuring that your child receives the best possible support and guidance throughout their academic journey." 
            />
            <FeatureCard 
              icon="/book-stack.png" 
              title="Global Curriculum" 
              description="Our international curriculum is designed to equip students with the skills and knowledge they need to thrive in a globalized world. We offer a wide range of subjects and programs that are tailored to meet the unique needs of each individual student." 
            />
            <FeatureCard 
              icon="/office-building.png" 
              title="State-of-the-Art Facilities" 
              description="Our school is equipped with modern and innovative facilities, including science and computer labs, libraries, sports grounds, and more. These facilities provide students with the tools they need to excel in their studies and develop their talents." 
            />
          </div>
          <div className="text-center mt-12">
            <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300">
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
        <div className="mx-auto mb-4 w-16 h-16 relative ">
        <Image src={icon} alt={title} layout="fill" objectFit="contain" />
      </div>
        <h3 className="text-black mb-2 text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default FeaturesSection;
  