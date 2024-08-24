import Image from "next/image";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import NewsletterSection from '@/components/NewsletterSection';
import TestimonialSection from '@/components/TestimonialSection';
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
     <NewsletterSection/>
     <TestimonialSection/>
     <StatsSection/>
     <EnrollSection/>
    </main>
    <Footer/>
    </>
  );
}
