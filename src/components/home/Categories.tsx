
import { Link } from "react-router-dom";

// Mock data - in a real app this would come from an API
const categories = [
  {
    id: 1,
    name: "Customer Service",
    icon: "👨‍💼",
    count: 42,
    color: "bg-blue-100",
  },
  {
    id: 2,
    name: "Data Analysis",
    icon: "📊",
    count: 37,
    color: "bg-green-100",
  },
  {
    id: 3,
    name: "E-commerce",
    icon: "🛒",
    count: 29,
    color: "bg-purple-100",
  },
  {
    id: 4,
    name: "Content Creation",
    icon: "✍️",
    count: 51,
    color: "bg-yellow-100",
  },
  {
    id: 5,
    name: "Translation",
    icon: "🌍",
    count: 18,
    color: "bg-red-100",
  },
  {
    id: 6,
    name: "Healthcare",
    icon: "🩺",
    count: 23,
    color: "bg-teal-100",
  },
  {
    id: 7,
    name: "Finance",
    icon: "💰",
    count: 31,
    color: "bg-indigo-100",
  },
  {
    id: 8,
    name: "Education",
    icon: "🎓",
    count: 27,
    color: "bg-orange-100",
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-marketplace-background">
      <div className="marketplace-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-marketplace-primary mb-2">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect AI solution for your specific business needs across various industries and use cases
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/categories/${category.id}`} 
              key={category.id} 
              className="block group"
            >
              <div className={`${category.color} rounded-lg p-6 transition-all group-hover:shadow-md text-center`}>
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-marketplace-primary mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.count} agents</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/categories" 
            className="inline-flex items-center text-marketplace-secondary hover:text-marketplace-primary font-medium"
          >
            View all categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
