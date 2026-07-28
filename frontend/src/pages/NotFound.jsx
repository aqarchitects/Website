import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="404 - Page Not Found - AQ Architects"
        description="The page you are looking for does not exist"
      />
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-background-primary px-4">
        <div className="text-center">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>

          {/* Error Message */}
          <h2 className="text-5xl font-semibold text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-xl font-medium text-gray-light mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>

          {/* Return Button */}
          <button
            onClick={() => navigate("/")}
            className="rounded-button bg-primary text-black text-xl font-semibold px-8 py-3 hover:opacity-90 transition-opacity"
          >
            Return to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

