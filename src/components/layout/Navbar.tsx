
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getUserInitials = () => {
    if (!user) return "U";
    const email = user.email || "";
    return email.substring(0, 1).toUpperCase();
  };

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
              <Link to="/pricing" className="text-gray-600 hover:text-marketplace-primary transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-marketplace-primary transition-colors">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/dashboard/profile")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
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
              </>
            )}
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
                to="/pricing"
                className="px-2 py-1 text-gray-600 hover:text-marketplace-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="px-2 py-1 text-gray-600 hover:text-marketplace-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="px-2 py-1 text-gray-600 hover:text-marketplace-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/profile"
                    className="px-2 py-1 text-gray-600 hover:text-marketplace-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-left"
                  >
                    Log out
                  </button>
                </>
              ) : (
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
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
