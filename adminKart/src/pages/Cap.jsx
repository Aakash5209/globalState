import React from "react";
import Header from "../components/home_page/Header";
import CostAdvantageProgram from "../components/cap_page/CostAdvantageProgram";
import MediaMentions from "../components/home_page/MediaMentions";

import WhyAdmitKard from "../components/cap_page/WhyAdmitKard";
import StudentJourney from "../components/cap_page/StudentJourney";
import FaqSection from "../components/home_page/FaqSection";
import ReviewCtaSection from "../components/home_page/ReviewCtaSection";
import Footer from "../components/home_page/Footer";
import PromoBanner from "../components/cap_page/PromoBanner";
import Programs from "../components/cap_page/Programs";
import CostProgram from "../components/cap_page/CostProgram";
import CurriculumOverview from "../components/cap_page/CurriculumOverview";
import FounderVideo from "../components/cap_page/FounderVideo";
import CostComparisonTable from "../components/cap_page/CostComparisonTable";

const Cap = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CostAdvantageProgram />
      <CostProgram />
      <CurriculumOverview />
      <FounderVideo />
      <CostComparisonTable />
      <PromoBanner />
      <Programs />

      <WhyAdmitKard />
      <StudentJourney />
      <MediaMentions />
      <FaqSection />
      <ReviewCtaSection />
      <Footer />
    </div>
  );
};

export default Cap;
