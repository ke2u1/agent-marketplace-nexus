
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ForDevelopersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-marketplace-background">
        {/* Hero Section */}
        <section className="py-16 bg-marketplace-primary text-white">
          <div className="marketplace-container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Build, Sell & Scale Your AI Agents</h1>
              <p className="text-xl mb-8 opacity-90">
                AgentMarket provides the tools, audience, and infrastructure you need to monetize your AI innovations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup?developer=true">
                  <Button className="bg-white text-marketplace-primary hover:bg-gray-100">
                    Start Building Today
                  </Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-marketplace-primary/30">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="marketplace-container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Build on AgentMarket?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Monetize Your AI</h3>
                <p className="text-gray-600">
                  Turn your AI projects into revenue streams with flexible pricing models including subscriptions, one-time purchases, and usage-based billing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Built-in Audience</h3>
                <p className="text-gray-600">
                  Instantly access thousands of potential customers actively looking for AI solutions, without spending on marketing or customer acquisition.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
                <p className="text-gray-600">
                  Focus on your AI logic while we handle the secure hosting, deployment, scaling, and payment processing infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="marketplace-container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-marketplace-primary"></div>
                
                {/* Step 1 */}
                <div className="md:flex items-center mb-12 relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">1. Create Your Agent</h3>
                    <p className="text-gray-600">
                      Build your AI agent using our API or SDK, or integrate an existing solution. Test thoroughly to ensure it meets our quality standards.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-marketplace-primary w-8 h-8 rounded-full border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </div>
                
                {/* Step 2 */}
                <div className="md:flex items-center mb-12 relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-marketplace-primary w-8 h-8 rounded-full border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">2. Submit for Review</h3>
                    <p className="text-gray-600">
                      Submit your agent for review through our developer dashboard. Our team will verify functionality, security, and compliance.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="md:flex items-center mb-12 relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">3. Publish & Price</h3>
                    <p className="text-gray-600">
                      Once approved, set your pricing model, add documentation, screenshots, and marketing materials to make your agent stand out.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-marketplace-primary w-8 h-8 rounded-full border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </div>
                
                {/* Step 4 */}
                <div className="md:flex items-center relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-marketplace-primary w-8 h-8 rounded-full border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">4. Earn Revenue</h3>
                    <p className="text-gray-600">
                      Start earning revenue as customers discover and use your agent. Track performance, gather feedback, and release updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/signup?developer=true">
                <Button className="bg-marketplace-primary hover:bg-marketplace-primary/90">
                  Join as a Developer
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForDevelopersPage;
