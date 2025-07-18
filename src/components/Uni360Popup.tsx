
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const Uni360Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-chancenkarte p-8 max-w-md w-full shadow-xl animate-fade-in-up">
        <div className="flex justify-between items-start mb-6">
          <div className="text-2xl">🌍</div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gunmetal/60 hover:text-gunmetal transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-satoshi font-bold text-gunmetal mb-4">
            Meet UNI 360° – Your Complete Study Abroad Companion
          </h3>
          
          <p className="text-gunmetal/70 mb-6">
            From exam prep to visa assistance, we help you unlock opportunities in Germany with ease.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-lg">🔓</span>
            <span className="text-gunmetal font-medium">Get early access now</span>
          </div>
          
          <button className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-8 py-3 rounded-chancenkarte font-semibold transition-all duration-300 hover:scale-105 w-full">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
};
