
import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { Advantages } from '@/components/Advantages';
import { EligibilityChecker } from '@/components/EligibilityChecker';
import { ExpertCTA } from '@/components/ExpertCTA';
import { FAQ } from '@/components/FAQ';
import { StickyBar } from '@/components/StickyBar';

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
      {/* Hero Section */}
      <Hero onCheckEligibility={scrollToEligibility} />
      
      {/* Advantages Section */}
      <Advantages />
      
      {/* Eligibility Checker */}
      <div id="eligibility-checker">
        <EligibilityChecker 
          onScoreChange={setEligibilityScore}
          hasStarted={hasStarted}
        />
      </div>
      
      {/* Expert CTA - Only show when eligible */}
      {isEligible && <ExpertCTA />}
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Sticky CTA Bar */}
      <StickyBar onCheckEligibility={scrollToEligibility} />
    </div>
  );
};

export default Index;
