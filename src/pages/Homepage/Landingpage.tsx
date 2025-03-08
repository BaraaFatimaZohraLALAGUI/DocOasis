
import Button from "../../components/ui/button/Button";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { ArrowRight, FileText, Shield, Users } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-indigo-50 px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-center md:space-x-12">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Streamline Your Document Management Workflow
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Securely store, organize, and collaborate on documents with our intuitive platform. Boost productivity with smart organization and powerful search.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/signup">
                    <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-lg py-6 px-8">
                      Get Started <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/features">
                    <Button variant="outline" className="w-full sm:w-auto text-lg py-6 px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070&auto=format&fit=crop"
                  alt="Document Management"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Powerful Features for Document Management
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your documents efficiently in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <FileText className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smart Organization
                </h3>
                <p className="text-gray-600">
                  Organize documents with folders, tags, and metadata for easy retrieval and management.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Users className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Seamless Collaboration
                </h3>
                <p className="text-gray-600">
                  Share documents with team members, set permissions, and collaborate in real-time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Shield className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enterprise Security
                </h3>
                <p className="text-gray-600">
                  Keep your documents secure with encryption, access controls, and compliance features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-indigo-400 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to transform your document workflow?
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-100">
              Join thousands of teams who have streamlined their document management process.
            </p>
            <div className="mt-8 flex justify-center">
            <Link 
                to="/signup" 
                className="block px-3 py-2 mt-1 rounded-md text-base font-medium bg-indigo-800 text-white hover:bg-indigo-950"
                >
                Sign up
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;