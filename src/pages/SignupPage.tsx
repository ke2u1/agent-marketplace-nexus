
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SignupForm from "@/components/auth/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-marketplace-background">
        <div className="marketplace-container">
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
