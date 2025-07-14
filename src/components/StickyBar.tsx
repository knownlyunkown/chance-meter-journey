
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface StickyBarProps {
  onCheckEligibility: () => void;
}

export const StickyBar = ({ onCheckEligibility }: StickyBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero section
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 0.8;
      setIsVisible(scrollPosition > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-sage-green/20 shadow-xl animate-fade-in-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-semibold text-gunmetal">
              Ready? Check your eligibility now
            </p>
            <p className="text-sm text-gunmetal/60">
              Takes less than 2 minutes
            </p>
          </div>
          
          <button
            onClick={onCheckEligibility}
            className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-6 py-3 rounded-chancenkarte font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
          >
            <ArrowUp className="w-4 h-4" />
            Start Eligibility Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
