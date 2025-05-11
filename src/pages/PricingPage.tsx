
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-marketplace-background">
        <div className="marketplace-container">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-marketplace-primary mb-2">Pricing Plans</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include access to our marketplace of AI agents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">Basic</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">For individuals exploring AI solutions</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to all free agents</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>10 premium agent credits/month</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Basic support</span>
                </div>
                <Button className="w-full mt-6 bg-marketplace-primary hover:bg-marketplace-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-marketplace-secondary transform scale-105">
              <div className="p-6 border-b bg-marketplace-secondary/10">
                <div className="inline-block px-3 py-1 text-xs font-semibold bg-marketplace-secondary text-white rounded-full mb-2">
                  Popular
                </div>
                <h3 className="text-xl font-semibold">Pro</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">For professionals and small teams</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to all free agents</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>50 premium agent credits/month</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>API access</span>
                </div>
                <Button className="w-full mt-6 bg-marketplace-secondary hover:bg-marketplace-secondary/90">
                  Get Started
                </Button>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">For organizations with advanced needs</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to all agents</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Unlimited premium agent usage</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Advanced analytics & reporting</span>
                </div>
                <Button className="w-full mt-6 bg-marketplace-primary hover:bg-marketplace-primary/90">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our team is here to help you find the right plan for your needs. Contact us for a personalized demo.
            </p>
            <Button variant="outline" className="border-marketplace-primary text-marketplace-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
