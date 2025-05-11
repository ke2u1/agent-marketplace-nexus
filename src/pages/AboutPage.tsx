
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-marketplace-background">
        <div className="marketplace-container">
          <h1 className="text-3xl font-bold mb-6">About AgentMarket</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              AgentMarket is the premier marketplace for AI agents and solutions. Our platform connects AI agent developers with businesses and individuals looking to leverage artificial intelligence to solve real-world problems.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in 2025, we've built a thriving ecosystem where innovation meets practical application. Our mission is to democratize access to AI technology and help creators monetize their expertise.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're a developer looking to showcase your AI creations or a business seeking cutting-edge AI solutions, AgentMarket provides the tools, infrastructure, and audience you need to succeed.
            </p>
            
            {/* About page content will expand here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
