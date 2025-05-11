
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - in a real app this would come from an API
const featuredAgents = [
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
  }
];

const FeaturedAgents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="marketplace-container">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-marketplace-primary mb-2">
              Featured AI Agents
            </h2>
            <p className="text-gray-600">
              Discover top-performing AI solutions for your business needs
            </p>
          </div>
          <Link to="/explore" className="text-marketplace-secondary font-medium hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAgents.map((agent) => (
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
                <CardHeader className="pb-2">
                  <div>
                    <h3 className="text-lg font-semibold line-clamp-1">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.developer}</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 flex-1">
                  <p className="text-sm text-gray-600 line-clamp-2">{agent.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {agent.tags.slice(0, 2).map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;
