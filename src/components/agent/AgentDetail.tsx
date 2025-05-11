
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Mock data - in a real app this would come from an API call using the ID
const agentData = {
  id: 1,
  name: "CustomerGPT",
  description: "An advanced AI-powered customer service agent that handles inquiries, resolves issues, and improves customer satisfaction 24/7. Our agent integrates with popular CRM systems and communication platforms to provide seamless support across channels.",
  image: "/placeholder.svg",
  developer: "AI Solutions Inc.",
  developerLogo: "/placeholder.svg",
  version: "2.1.0",
  lastUpdate: "2023-04-15",
  price: 29.99,
  subscription: "monthly",
  rating: 4.8,
  reviews: 124,
  category: "Customer Service",
  tags: ["Support", "E-commerce", "Chatbot", "CRM Integration", "Multilingual"],
  features: [
    "24/7 customer support automation",
    "Seamless CRM integration",
    "Multilingual support (15+ languages)",
    "Sentiment analysis and escalation",
    "Custom knowledge base training",
    "Analytics and performance reports"
  ],
  screenshots: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ],
  demo: "https://example.com/demo",
  metrics: {
    responseTime: "0.8s",
    successRate: "94%",
    uptime: "99.9%",
    userSatisfaction: "4.7/5"
  },
  pricingTiers: [
    {
      name: "Starter",
      price: 29.99,
      period: "monthly",
      features: [
        "Up to 1,000 conversations/month",
        "Basic integrations",
        "Email support",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: 79.99,
      period: "monthly",
      popular: true,
      features: [
        "Up to 5,000 conversations/month",
        "All integrations",
        "Priority support",
        "Advanced analytics",
        "Custom training"
      ]
    },
    {
      name: "Enterprise",
      price: 199.99,
      period: "monthly",
      features: [
        "Unlimited conversations",
        "All integrations",
        "Dedicated support",
        "Full analytics suite",
        "Custom training",
        "SLA guarantees"
      ]
    }
  ],
  documentation: `
  # CustomerGPT Documentation
  
  ## Getting Started
  
  To integrate CustomerGPT with your existing systems, follow these steps:
  
  1. Configure your API keys in the dashboard
  2. Connect your knowledge base
  3. Customize responses and workflows
  
  ## API Reference
  
  \`\`\`javascript
  // Initialize the agent
  const customerGPT = new CustomerGPT({
    apiKey: 'your-api-key',
    organization: 'your-org-id'
  });
  
  // Handle a customer query
  const response = await customerGPT.processQuery({
    text: "How do I reset my password?",
    userId: "user-123",
    context: { ... }
  });
  \`\`\`
  
  ## Webhooks
  
  CustomerGPT can send webhooks for important events:
  
  - Conversation started
  - Escalation needed
  - Resolution achieved
  
  ## Custom Training
  
  Upload your custom knowledge base through our dashboard or API.
  `
};

const AgentDetail = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const [selectedTier, setSelectedTier] = useState<number>(1); // Default to middle tier
  
  // In a real app, we would fetch the agent data based on the ID
  // const { data: agent, isLoading, error } = useQuery(['agent', id], fetchAgentById)
  const agent = agentData; // Using mock data for now

  const handleTryDemo = () => {
    window.open(agent.demo, '_blank');
  };

  const handlePurchase = () => {
    toast({
      title: "Added to cart",
      description: `${agent.name} (${agent.pricingTiers[selectedTier].name}) has been added to your cart.`,
    });
  };

  return (
    <div className="marketplace-container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Agent info */}
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={agent.image} 
                alt={agent.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{agent.name}</h1>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">v{agent.version}</Badge>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(agent.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({agent.reviews} reviews)</span>
                <span className="text-sm text-gray-600">•</span>
                <Badge variant="outline">{agent.category}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <img src={agent.developerLogo} alt={agent.developer} className="w-full h-full object-cover" />
                  </div>
                  <span>{agent.developer}</span>
                </div>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-600">Last updated: {agent.lastUpdate}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose max-w-none mb-8">
                    <h2 className="text-2xl font-semibold mb-4">About This AI Agent</h2>
                    <p className="mb-4">{agent.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 mt-6">Key Features</h3>
                    <ul className="space-y-2">
                      {agent.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {agent.screenshots.map((screenshot, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={screenshot} 
                            alt={`${agent.name} screenshot ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {agent.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documentation">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: agent.documentation }} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <p className="text-gray-600">Reviews will be available after Supabase integration</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="metrics">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(agent.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-sm text-gray-500 uppercase mb-1">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </h3>
                        <p className="text-2xl font-semibold text-marketplace-primary">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Right column - Pricing */}
        <div>
          <Card className="sticky top-6">
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Pricing Plans</h2>
                <div className="space-y-4">
                  {agent.pricingTiers.map((tier, index) => (
                    <div 
                      key={index}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedTier === index 
                          ? 'border-marketplace-secondary ring-2 ring-marketplace-secondary/20' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedTier(index)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{tier.name}</h3>
                          {tier.popular && (
                            <Badge className="mt-1 bg-marketplace-secondary">Popular</Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">${tier.price}</div>
                          <div className="text-sm text-gray-500">per {tier.period}</div>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1 mt-3">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg 
                              className="w-4 h-4 text-green-500 mr-2 mt-0.5" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-marketplace-secondary hover:bg-marketplace-secondary/90" 
                  onClick={handlePurchase}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-marketplace-secondary text-marketplace-secondary hover:bg-marketplace-secondary/10"
                  onClick={handleTryDemo}
                >
                  Try Free Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
