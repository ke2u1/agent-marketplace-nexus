
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";

// Mock news data - in a real app, this would come from an API
const mockNews = [
  {
    id: 1,
    title: "OpenAI Announces New Agent Framework",
    source: "AI News",
    date: "2025-05-10",
    summary: "OpenAI has released a new framework allowing developers to create more sophisticated AI agents with improved reasoning capabilities.",
    url: "#"
  },
  {
    id: 2,
    title: "Study Shows AI Agents Improving Business Efficiency by 34%",
    source: "Business Tech Review",
    date: "2025-05-08",
    summary: "A recent study of 500 businesses found that implementing AI agents led to significant productivity improvements across multiple sectors.",
    url: "#"
  },
  {
    id: 3,
    title: "New Standards Proposed for AI Agent Security",
    source: "Tech Policy Today",
    date: "2025-05-05",
    summary: "Industry leaders have proposed a new set of standards to ensure AI agents meet baseline security and privacy requirements.",
    url: "#"
  }
];

// Mock learning resources
const learningResources = [
  {
    id: 1,
    title: "What are AI Agents?",
    description: "An introduction to AI agents and how they differ from traditional software.",
    content: "AI agents are autonomous or semi-autonomous software entities that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional software that follows predefined instructions, AI agents can learn, adapt, and operate with varying degrees of autonomy.\n\nAI agents typically incorporate technologies such as natural language processing, machine learning, computer vision, and reasoning capabilities. They can range from simple task-specific agents (like a chatbot) to complex multi-purpose agents that can perform a wide range of functions.",
    level: "beginner"
  },
  {
    id: 2,
    title: "How AI Agents Can Transform Your Business",
    description: "Discover the practical applications of AI agents across various industries.",
    content: "AI agents can transform businesses across virtually every industry by automating complex tasks, providing intelligent insights, and enabling new capabilities that weren't previously possible.\n\nIn customer service, AI agents can handle inquiries 24/7, freeing human agents for more complex issues. In healthcare, they can assist with diagnosis, patient monitoring, and administrative tasks. Financial institutions use AI agents for fraud detection, algorithmic trading, and personalized financial advice.\n\nThe key business benefits include increased operational efficiency, cost reduction, improved customer experiences, better decision-making through data analysis, and enabling completely new business models and services.",
    level: "beginner"
  },
  {
    id: 3,
    title: "Building Your First AI Agent",
    description: "A step-by-step guide to creating a simple but effective AI agent.",
    content: "Creating your first AI agent involves several key steps:\n\n1. Define the agent's purpose and scope\n2. Choose the right technology stack and frameworks\n3. Design the agent's architecture and decision-making process\n4. Implement core functionalities and integrations\n5. Train and fine-tune the agent's capabilities\n6. Test thoroughly across various scenarios\n7. Deploy and monitor performance\n\nThe most successful AI agents solve specific problems well rather than attempting to do everything. Start with a clearly defined use case and expand the agent's capabilities over time based on user feedback and performance metrics.",
    level: "intermediate"
  },
  {
    id: 4,
    title: "Advanced Agent Techniques",
    description: "Explore cutting-edge approaches to creating sophisticated AI agents.",
    content: "Advanced AI agents incorporate several sophisticated techniques:\n\n- Multi-agent systems where multiple specialized agents collaborate\n- Reinforcement learning for autonomous improvement\n- Context-aware reasoning that considers situational factors\n- Emotional intelligence to better understand and respond to human needs\n- Knowledge graph integration for connected understanding\n- Explainable AI features that help users understand agent decisions\n- Advanced security measures to prevent misuse\n\nThe most sophisticated agents are now capable of long-term memory, learning from minimal examples, and understanding implied information that isn't explicitly stated.",
    level: "advanced"
  }
];

// Mock function to fetch news from an API
const fetchLatestNews = async () => {
  // In a real implementation, this would be an API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockNews);
    }, 1000);
  }).then(data => data);
};

const LearningCenterPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");

  const { data: news, isLoading: isLoadingNews } = useQuery({
    queryKey: ['agentNews'],
    queryFn: () => fetchLatestNews()
  });

  const filteredResources = learningResources.filter(
    resource => selectedLevel === "all" || resource.level === selectedLevel
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-marketplace-background">
        <div className="marketplace-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-marketplace-primary mb-6">
              AI Agent Learning Center
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Discover everything you need to know about AI agents, whether you're looking to use them
              or develop your own. Stay updated with the latest developments in the field.
            </p>

            <div className="grid md:grid-cols-7 gap-8 mb-16">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold text-marketplace-primary mb-4">
                  Learn About AI Agents
                </h2>

                <Tabs defaultValue="beginner" className="mb-6">
                  <TabsList className="mb-4">
                    <TabsTrigger 
                      value="beginner" 
                      onClick={() => setSelectedLevel("beginner")}
                    >
                      Beginners
                    </TabsTrigger>
                    <TabsTrigger 
                      value="intermediate" 
                      onClick={() => setSelectedLevel("intermediate")}
                    >
                      Intermediate
                    </TabsTrigger>
                    <TabsTrigger 
                      value="advanced" 
                      onClick={() => setSelectedLevel("advanced")}
                    >
                      Advanced
                    </TabsTrigger>
                    <TabsTrigger 
                      value="all" 
                      onClick={() => setSelectedLevel("all")}
                    >
                      All Resources
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value={selectedLevel === "all" ? "all" : selectedLevel}>
                    <div className="space-y-6">
                      {filteredResources.map((resource) => (
                        <Card key={resource.id}>
                          <CardHeader>
                            <CardTitle>{resource.title}</CardTitle>
                            <CardDescription>{resource.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 whitespace-pre-line">
                              {resource.content}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold text-marketplace-primary mb-4">
                  Latest AI Agent News
                </h2>
                
                {isLoadingNews ? (
                  <div className="flex items-center justify-center h-40">
                    <Loader2 className="h-8 w-8 animate-spin text-marketplace-primary" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {news?.map((item: any) => (
                      <Card key={item.id}>
                        <CardHeader className="py-4">
                          <CardTitle className="text-base">{item.title}</CardTitle>
                          <CardDescription className="text-xs">
                            {item.source} • {item.date}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p className="text-sm">{item.summary}</p>
                          <a 
                            href={item.url} 
                            className="text-sm text-marketplace-secondary font-medium mt-2 block"
                          >
                            Read more →
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningCenterPage;
