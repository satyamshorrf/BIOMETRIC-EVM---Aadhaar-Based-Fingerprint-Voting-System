import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ProjectOverviewPage from "./pages/ProjectOverviewPage";
import WhyChoosePage from "./pages/WhyChoosePage";
import FeaturesPage from "./pages/FeaturesPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import HowItWorksPage from "./pages/HowItWorksPage";

import TeamPage from "./pages/TeamPage";
import RecognitionPage from "./pages/RecognitionPage";
import TestimonialPage from "./pages/TestimonialPage";

import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FaqPage";

import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import FutureDevelopmentPage from "./pages/FutureDevelopmentPage";

import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <ScrollToTop />

      <main className="flex flex-col pt-10 bg-[#120c07] relative">
        <Routes>
          {/* PRIORITY ROUTING */}
          <Route path="/" element={<HomePage />} />
          <Route path="/project-overview" element={<ProjectOverviewPage />} />
          <Route path="/why-choose" element={<WhyChoosePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />

          <Route path="/team" element={<TeamPage />} />
          <Route path="/recognition" element={<RecognitionPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />

          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/future-development" element={<FutureDevelopmentPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <RecognitionPage />
      <Footer />
    </div>
  );
}

export default App;
