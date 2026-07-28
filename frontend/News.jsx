import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const News = () => {
  return (
    <>
      <SEO
        title="News - AQ Architects"
        description="Stay updated with the latest news from AQ Architects"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/homepagebg.png"
        titleLine1="Latest News &"
        titleLine2="Updates"
        description="Stay informed about our latest projects, awards, and industry insights from AQ Architects."
        height="h-[80vh]"
      />

      {/* Page content will be added here */}
      <div className="min-h-screen bg-black">
        {/* News articles and updates sections */}
      </div>

      <Footer />
    </>
  );
};

export default News;

