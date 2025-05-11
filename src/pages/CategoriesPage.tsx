
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "react-router-dom";

const CategoriesPage = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-marketplace-background">
        <div className="marketplace-container">
          <h1 className="text-3xl font-bold mb-6">
            {id ? `Category: ${id}` : "All Categories"}
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {id ? (
              <p className="text-gray-500">Showing agents for category {id}</p>
            ) : (
              <p className="text-gray-500">Browse all categories</p>
            )}
            {/* Category content will go here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
