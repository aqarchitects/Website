import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { lazy, Suspense } from "react";
import LoadingFallback from "./components/LoadingFallback";
import ScrollToTop from "./components/ScrollToTop";
import { PreloadProvider } from "./components/imagePreloader";

// Lazy load all pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
const News = lazy(() => import("./pages/News"));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <PreloadProvider
            config={{
              debug: false, // Set to false in production
              concurrency: 6,
              timeout: 30000,
              // onComplete: (result) => {
              //   console.log("[App] Image preloading complete:", result);
              // },
            }}
            autoStart={false}
            networkOptions={{
              respectDataSaver: true,
              requireFastConnection: false,
              allowedConnectionTypes: ["4g", "3g", "unknown"],
            }}
          >
            <BrowserRouter>
              <ScrollToTop />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/news" element={<News />} />

                  {/* Legal Pages */}
                  <Route
                    path="/terms-of-service"
                    element={<TermsOfService />}
                  />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                  {/* Support */}
                  <Route path="/faq" element={<FAQ />} />

                  {/* 404 - Catch all unmatched routes */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </PreloadProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
