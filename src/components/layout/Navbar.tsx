
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="marketplace-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-marketplace-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="ml-2 text-xl font-bold text-marketplace-primary">
                AgentMarket
              </span>
            </Link>

            <div className="hidden md:flex items-center ml-10 space-x-8">
              <Link to="/explore" className="text-gray-600 hover:text-marketplace-primary transition-colors">
                Explore
              </Link>
              <Link to="/categories" className="text-gray-600 hover:text-marketplace-primary transition-colors">
                Categories
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-marketplace-primary transition-colors">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-marketplace-primary text-marketplace-primary">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-marketplace-secondary hover:bg-opacity-90 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/explore"
                className="px-2 py-1 text-gray-600 hover:text-marketplace-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                to="/categories"
                className="px-2 py-1 text-gray-600 hover:text-marketplace-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="px-2 py-1 text-gray-600 hover:text-marketplace-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex space-x-2 pt-2">
                <Link to="/login" className="w-1/2" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-marketplace-primary text-marketplace-primary">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="w-1/2" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-marketplace-secondary hover:bg-opacity-90 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
