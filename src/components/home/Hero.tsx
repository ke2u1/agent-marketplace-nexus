
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-gradient-to-br from-marketplace-primary to-marketplace-secondary py-20 text-white">
      <div className="marketplace-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Ultimate AI Agent Marketplace
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Connect with powerful AI agents that transform how you work and live.
            For developers: List your agents. For users: Find the perfect solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <Input
              type="text"
              placeholder="Search for AI agents..."
              className="bg-white text-gray-800 h-12 rounded-md border-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-white text-marketplace-primary hover:bg-gray-100 font-semibold h-12 px-6 w-full sm:w-auto">
              Search
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/for-developers">
              <Button className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white text-white">
                I'm a Developer
              </Button>
            </Link>
            <Link to="/explore">
              <Button className="bg-white text-marketplace-primary hover:bg-gray-100">
                Browse Agents
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <span className="text-sm opacity-80 mr-2">Popular:</span>
            {["Customer Service", "Data Analysis", "E-commerce", "Content Creation", "Translation"].map(
              (tag) => (
                <button
                  key={tag}
                  className="text-sm bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full px-3 py-1 transition-all"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
