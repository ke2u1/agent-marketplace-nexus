
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Dashboard sub-pages
const DashboardHome = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Dashboard Home</h2>
    <p className="text-gray-600">Welcome to your dashboard. View your agents, analytics, and more.</p>
    {/* Dashboard content here */}
  </div>
);

const ProfileSettings = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      setIsLoading(true);
      try {
        // Fetch profile from Supabase
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
          
        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProfile();
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="mb-4">
          <strong>Email:</strong> {user?.email}
        </p>
        {profile && (
          <>
            <p className="mb-4">
              <strong>Name:</strong> {profile.full_name || 'Not set'}
            </p>
            <p className="mb-4">
              <strong>Account type:</strong> {profile.is_developer ? 'Developer' : 'User'}
            </p>
          </>
        )}
        {/* Profile settings form would go here */}
      </div>
    </div>
  );
};

const MyAgents = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">My Agents</h2>
    {/* List of user's agents would go here */}
    <p className="text-gray-600">You haven't added any agents yet.</p>
  </div>
);

const Purchases = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
    {/* Purchase history would go here */}
    <p className="text-gray-600">You don't have any purchases yet.</p>
  </div>
);

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-marketplace-background">
        <div className="marketplace-container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64 shrink-0">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-semibold text-lg mb-4">Dashboard</h2>
                <nav className="space-y-2">
                  <Link to="/dashboard">
                    <Button variant="ghost" className="w-full justify-start">Overview</Button>
                  </Link>
                  <Link to="/dashboard/profile">
                    <Button variant="ghost" className="w-full justify-start">Profile Settings</Button>
                  </Link>
                  <Link to="/dashboard/agents">
                    <Button variant="ghost" className="w-full justify-start">My Agents</Button>
                  </Link>
                  <Link to="/dashboard/purchases">
                    <Button variant="ghost" className="w-full justify-start">Purchase History</Button>
                  </Link>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Routes>
                  <Route path="/" element={<DashboardHome />} />
                  <Route path="/profile" element={<ProfileSettings />} />
                  <Route path="/agents" element={<MyAgents />} />
                  <Route path="/purchases" element={<Purchases />} />
                  <Route path="*" element={<DashboardHome />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
