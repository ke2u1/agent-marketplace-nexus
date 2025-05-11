
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-marketplace-background">
        <div className="marketplace-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-marketplace-primary mb-8">Terms of Service</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to AgentMarket. These Terms of Service govern your use of our platform, including 
                  all features and functionalities, the website, user interfaces, and content offered through our service.
                </p>
                <p className="text-gray-700">
                  By using our service, you agree to these Terms. If you don't agree to these Terms, 
                  please don't use our service.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>Platform:</strong> Refers to the AgentMarket website, services, and applications.</li>
                  <li><strong>User:</strong> Any individual who accesses or uses the Platform.</li>
                  <li><strong>Developer:</strong> Users who create and list AI agents on the Platform.</li>
                  <li><strong>Consumer:</strong> Users who browse, purchase, and use AI agents listed on the Platform.</li>
                  <li><strong>Content:</strong> All information, text, images, data, or other materials uploaded or posted on the Platform.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
                <p className="text-gray-700 mb-4">
                  To use certain features of the Platform, you may need to create an account. 
                  You are responsible for maintaining the confidentiality of your account credentials 
                  and for all activities that occur under your account.
                </p>
                <p className="text-gray-700">
                  You must provide accurate, current, and complete information during registration and 
                  keep your account information updated.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Developer Terms</h2>
                <p className="text-gray-700 mb-4">
                  Developers who list AI agents on the Platform agree to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Provide accurate descriptions of their agents' capabilities</li>
                  <li>Ensure their agents comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain and support their listed agents</li>
                  <li>Pay applicable platform fees as outlined in the Developer Agreement</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Consumer Terms</h2>
                <p className="text-gray-700 mb-4">
                  Consumers who purchase or use AI agents from the Platform agree to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Use agents in compliance with all applicable laws</li>
                  <li>Not attempt to reverse engineer or duplicate agents</li>
                  <li>Respect usage limitations specified by developers</li>
                  <li>Pay for services as outlined in agent listings</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">
                  You may not use the Platform to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Distribute malware or harmful code</li>
                  <li>Harass, abuse, or harm another person</li>
                  <li>Interfere with the proper functioning of the Platform</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700">
                  The Platform and its original content, features, and functionality are owned by 
                  AgentMarket and are protected by international copyright, trademark, patent, trade secret, 
                  and other intellectual property laws.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700">
                  We may modify these Terms at any time. We will provide notice of significant changes 
                  by posting the new Terms on the Platform and updating the "Last Updated" date. 
                  Your continued use of the Platform after changes constitutes your acceptance of the new Terms.
                </p>
              </section>
              
              <p className="text-sm text-gray-500 mt-8">Last Updated: May 11, 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
