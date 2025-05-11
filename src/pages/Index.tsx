
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedAgents from "@/components/home/FeaturedAgents";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import DeveloperCTA from "@/components/home/DeveloperCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedAgents />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <DeveloperCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
