
import { Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gunmetal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm mb-2">A product of</p>
            <h3 className="text-2xl font-satoshi font-bold text-white">
              UNI 360°
            </h3>
          </div>

          {/* Center - Navigation */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                FAQs
              </button>
              <a 
                href="#" 
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Privacy
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Terms
              </a>
            </div>
          </div>

          {/* Right - Social and Copyright */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/60 text-xs">
              © 2024 UNI 360°. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            Helping students and professionals achieve their dreams in Germany.
          </p>
        </div>
      </div>
    </footer>
  );
};
