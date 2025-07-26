import Header from "../components/home_page/Header";
import HeroSection from "../components/home_page/HeroSection";
import FeatureCards from "../components/home_page/FeatureCards";
import TestimonialsSection from "../components/home_page/TestimonialsSection";
import MediaMentions from "../components/home_page/MediaMentions";
import CourseFinder from "../components/home_page/CourseFinder";
import MentorConnect from "../components/home_page/MentorConnect";
import CircularChatCarousel from "../components/home_page/CircularChatCarousel";
import BlogSection from "../components/home_page/BlogSection ";
import FaqSection from "../components/home_page/FaqSection";
import ReviewCtaSection from "../components/home_page/ReviewCtaSection";
import Footer from "../components/home_page/Footer";


const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <FeatureCards />
      <MentorConnect />
      <CourseFinder />
      <CircularChatCarousel />
      <BlogSection />
      <MediaMentions />
      <FaqSection />
      <ReviewCtaSection />
      <Footer />
      
    </div>
  );
};

export default Home;