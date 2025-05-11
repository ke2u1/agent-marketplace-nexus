
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DeveloperCTA = () => {
  return (
    <section className="py-16 bg-marketplace-primary text-white">
      <div className="marketplace-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Build and Monetize AI Agents</h2>
            <p className="text-lg opacity-90 mb-6">
              Join our community of AI developers. Create, publish, and monetize your AI agents on our marketplace. Get access to tools, resources, and a growing user base.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/for-developers">
                <Button className="bg-white text-marketplace-primary hover:bg-gray-100">
                  Learn More
                </Button>
              </Link>
              <Link to="/signup?developer=true">
                <Button variant="outline" className="border-white text-white hover:bg-marketplace-primary/30">
                  Sign Up as a Developer
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="bg-marketplace-primary/30 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Developer Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Access to developer tools and SDKs",
                  "Simple agent submission and review process",
                  "Transparent revenue sharing model",
                  "Marketing and promotion opportunities",
                  "Developer community and support",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-green-300 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCTA;
