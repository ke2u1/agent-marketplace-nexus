
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "AgentMarket transformed our customer service operations. The AI agent we deployed handles over 70% of inquiries automatically, saving us thousands each month.",
    author: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "RetailPlus",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "As a developer, I've been able to monetize my AI agents and reach customers I never would have found on my own. The platform makes distribution incredibly simple.",
    author: "Michael Chen",
    role: "AI Developer",
    company: "TechInnovate",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "We integrated a data analysis agent into our workflow and immediately gained insights that would have taken our team weeks to discover. Game changer for our business.",
    author: "Alex Rivera",
    role: "Data Scientist",
    company: "Analytics Co",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-marketplace-background">
      <div className="marketplace-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-marketplace-primary mb-2">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses and developers who are already benefiting from our AI agent marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="marketplace-card">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {Array(5).fill(null).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
