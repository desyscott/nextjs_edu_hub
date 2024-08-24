import Image from "next/image";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import EnrollSection from "@/components/EnrollSection";

export default function LandingPage() {
  return (
    <> 
     <Navbar />
    <main className=" pt-16 font-gilroy">
      
  
     <HeroSection/>
     <FeaturesSection />
     <StatsSection/>
     <EnrollSection/>
  
    </main>
    <Footer/>
    </>
  );
}
