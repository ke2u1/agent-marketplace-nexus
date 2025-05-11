
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AgentDetail from "@/components/agent/AgentDetail";

const AgentDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-marketplace-background">
        <AgentDetail />
      </main>
      <Footer />
    </div>
  );
};

export default AgentDetailPage;
