
import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Advantages } from '@/components/Advantages';
import { About } from '@/components/About';
import { EligibilityChecker } from '@/components/EligibilityChecker';
import { ExpertCTA } from '@/components/ExpertCTA';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { StickyBar } from '@/components/StickyBar';
import { Uni360Popup } from '@/components/Uni360Popup';

const Index = () => {
  const [eligibilityScore, setEligibilityScore] = useState(0);
  const [isEligible, setIsEligible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // User is eligible if they meet at least 4 out of 5 criteria
    const eligible = eligibilityScore >= 4;
    setIsEligible(eligible);
  }, [eligibilityScore]);

  const scrollToEligibility = () => {
    document.getElementById('eligibility-checker')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setHasStarted(true);
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* UNI 360° Popup */}
      <Uni360Popup />
      
      {/* Navigation */}
      <Navigation onCheckEligibility={scrollToEligibility} />
      
      {/* Hero Section */}
      <Hero onCheckEligibility={scrollToEligibility} />
      
      {/* Advantages Section */}
      <Advantages />
      
      {/* About Section */}
      <About />
      
      {/* Eligibility Checker */}
      <div id="eligibility-checker">
        <EligibilityChecker 
          onScoreChange={setEligibilityScore}
          hasStarted={hasStarted}
        />
      </div>
      
      {/* Expert CTA - Only show when eligible */}
      {isEligible && <ExpertCTA />}
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky CTA Bar */}
      <StickyBar onCheckEligibility={scrollToEligibility} />
    </div>
  );
};

export default Index;
