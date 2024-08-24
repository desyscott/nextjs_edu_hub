import Image from "next/image";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <> 
     <Navbar />
    <main className=" pt-16 font-gilroy">
      
  
     <HeroSection/>
     <FeaturesSection />
     
  
    </main>
    <Footer/>
    </>
  );
}
