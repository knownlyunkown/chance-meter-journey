
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onCheckEligibility: () => void;
}

export const Navigation = ({ onCheckEligibility }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sage-green/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-satoshi font-bold text-gunmetal">
              Chancenkarte
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gunmetal hover:text-tigers-eye px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => console.log('Navigate to UNI 360°')}
                className="text-gunmetal hover:text-tigers-eye px-3 py-2 text-sm font-medium transition-colors"
              >
                UNI 360°
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gunmetal hover:text-tigers-eye px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQs
              </button>
              <button
                onClick={onCheckEligibility}
                className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-6 py-2 rounded-chancenkarte text-sm font-semibold transition-all duration-300 hover:scale-105"
              >
                Check Eligibility
              </button>
            </div>
          </div>

          {/* UNI 360° Branding */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-lg font-satoshi font-bold text-gunmetal">
                UNI 360°
              </div>
              <div className="text-xs text-gunmetal/60">Study Abroad Companion</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gunmetal hover:text-tigers-eye p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-sage-green/20">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gunmetal hover:text-tigers-eye block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                About
              </button>
              <button
                onClick={() => console.log('Navigate to UNI 360°')}
                className="text-gunmetal hover:text-tigers-eye block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                UNI 360°
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gunmetal hover:text-tigers-eye block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                FAQs
              </button>
              <button
                onClick={onCheckEligibility}
                className="bg-tigers-eye hover:bg-tigers-eye/90 text-white block px-6 py-3 rounded-chancenkarte text-base font-semibold w-full text-center mt-4 transition-all duration-300"
              >
                Check Eligibility
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
