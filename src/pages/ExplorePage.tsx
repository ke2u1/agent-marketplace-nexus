
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

// Mock data - in a real app this would come from an API
const agents = [
  {
    id: 1,
    name: "CustomerGPT",
    description: "AI-powered customer service agent that handles inquiries 24/7",
    image: "/placeholder.svg",
    developer: "AI Solutions Inc.",
    price: 29.99,
    rating: 4.8,
    reviews: 124,
    category: "Customer Service",
    tags: ["Support", "E-commerce", "Chatbot"]
  },
  {
    id: 2,
    name: "DataMiner Pro",
    description: "Extract insights from your data automatically with advanced analytics",
    image: "/placeholder.svg",
    developer: "DataTech Labs",
    price: 49.99,
    rating: 4.7,
    reviews: 89,
    category: "Data Analysis",
    tags: ["Analytics", "Visualization", "Reporting"]
  },
  {
    id: 3,
    name: "ContentCreator",
    description: "Generate blog posts, social media content, and marketing copy instantly",
    image: "/placeholder.svg",
    developer: "Creative AI",
    price: 19.99,
    rating: 4.5,
    reviews: 210,
    category: "Content Creation",
    tags: ["Marketing", "Writing", "SEO"]
  },
  {
    id: 4,
    name: "InventoryGenius",
    description: "Optimize inventory management and forecasting for your business",
    image: "/placeholder.svg",
    developer: "SupplyChain AI",
    price: 39.99,
    rating: 4.6,
    reviews: 52,
    category: "E-commerce",
    tags: ["Inventory", "Forecasting", "Retail"]
  },
  {
    id: 5,
    name: "LegalAssistant",
    description: "Draft and review legal documents with AI-powered analysis",
    image: "/placeholder.svg",
    developer: "LawTech AI",
    price: 59.99,
    rating: 4.3,
    reviews: 38,
    category: "Legal",
    tags: ["Documents", "Analysis", "Compliance"]
  },
  {
    id: 6,
    name: "ImageEnhancer",
    description: "Automatically enhance and optimize images for your website",
    image: "/placeholder.svg",
    developer: "Visual AI",
    price: 24.99,
    rating: 4.4,
    reviews: 76,
    category: "Graphics",
    tags: ["Images", "Optimization", "Design"]
  },
  {
    id: 7,
    name: "TaskAutomator",
    description: "Automate repetitive tasks and workflows in your business",
    image: "/placeholder.svg",
    developer: "AutomateAI",
    price: 34.99,
    rating: 4.9,
    reviews: 105,
    category: "Productivity",
    tags: ["Automation", "Workflow", "Integration"]
  },
  {
    id: 8,
    name: "TranslateBot",
    description: "Translate content between 50+ languages with high accuracy",
    image: "/placeholder.svg",
    developer: "Linguist AI",
    price: 29.99,
    rating: 4.7,
    reviews: 142,
    category: "Translation",
    tags: ["Multilingual", "Localization", "Content"]
  }
];

// Mock categories
const categories = [
  "All Categories",
  "Customer Service",
  "Data Analysis",
  "Content Creation",
  "E-commerce",
  "Legal",
  "Graphics",
  "Productivity",
  "Translation"
];

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Filter agents based on search, category, and price
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All Categories" || agent.category === selectedCategory;
    
    const matchesPrice = agent.price >= priceRange[0] && agent.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort agents
  const sortedAgents = [...filteredAgents].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    // Default: featured or most popular
    return b.reviews - a.reviews;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-marketplace-background">
        <div className="marketplace-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-marketplace-primary mb-2">
              Explore AI Agents
            </h1>
            <p className="text-gray-600">
              Discover and deploy powerful AI solutions for your business
            </p>
          </div>

          {/* Search and filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <Input
                  type="text"
                  placeholder="Search agents..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="md:col-span-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-1">
                <Button className="w-full bg-marketplace-primary">
                  Filter
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between">
                <span className="text-sm">Price Range: ${priceRange[0]} - ${priceRange[1]}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-6 px-2"
                  onClick={() => setPriceRange([0, 100])}
                >
                  Reset
                </Button>
              </div>
              <Slider
                value={priceRange}
                min={0}
                max={100}
                step={1}
                onValueChange={setPriceRange}
                className="my-4"
              />
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedAgents.length > 0 ? (
              sortedAgents.map(agent => (
                <Link to={`/agent/${agent.id}`} key={agent.id} className="block">
                  <Card className="marketplace-card h-full flex flex-col">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 right-3 bg-marketplace-secondary">
                        ${agent.price}/mo
                      </Badge>
                    </div>
                    <CardContent className="py-4 flex-1">
                      <h3 className="font-semibold line-clamp-1">{agent.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{agent.developer}</p>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{agent.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {agent.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs font-normal">
                            {tag}
                          </Badge>
                        ))}
                        {agent.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs font-normal">
                            +{agent.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 border-t flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="text-yellow-500 mr-1">★</div>
                        <span className="font-medium text-sm">{agent.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({agent.reviews})</span>
                      </div>
                      <Badge className="bg-marketplace-primary/10 hover:bg-marketplace-primary/20 text-marketplace-primary">
                        {agent.category}
                      </Badge>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No agents found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                    setSortBy("featured");
                    setPriceRange([0, 100]);
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;
