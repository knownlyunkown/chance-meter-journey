
import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

interface HeroProps {
  onCheckEligibility: () => void;
}

export const Hero = ({ onCheckEligibility }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-off-white via-cb10 to-columbia-blue">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-satoshi font-bold text-gunmetal leading-tight">
                Want to work in{' '}
                <span className="text-tigers-eye">Germany</span> — but haven't 
                landed a job offer yet?
              </h1>
              
              <p className="text-xl text-gunmetal/70 leading-relaxed max-w-lg">
                Answer a few simple questions and instantly see if you're on track.
              </p>
            </div>
            
            <button
              onClick={onCheckEligibility}
              className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-8 py-4 rounded-chancenkarte text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-glow"
            >
              Check My Eligibility
            </button>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 items-center pt-8 border-t border-gunmetal/10">
              <div className="flex items-center gap-2 text-gunmetal/60">
                <GraduationCap className="w-5 h-5 text-sage-green" />
                <span className="text-sm">Study Abroad Experts</span>
              </div>
              <div className="flex items-center gap-2 text-gunmetal/60">
                <MapPin className="w-5 h-5 text-sage-green" />
                <span className="text-sm">Germany Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-gunmetal/60">
                <Briefcase className="w-5 h-5 text-sage-green" />
                <span className="text-sm">Career Success</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
              <div className="space-y-6">
                {/* Passport mockup */}
                <div className="bg-gunmetal rounded-lg p-4 rotate-3 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-tigers-eye rounded-full"></div>
                    <div className="text-white text-sm font-semibold">PASSPORT</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/30 rounded w-3/4"></div>
                    <div className="h-2 bg-white/30 rounded w-1/2"></div>
                  </div>
                </div>
                
                {/* German flag colors */}
                <div className="flex gap-2 -rotate-2">
                  <div className="w-16 h-4 bg-black rounded"></div>
                  <div className="w-16 h-4 bg-red-600 rounded"></div>
                  <div className="w-16 h-4 bg-yellow-400 rounded"></div>
                </div>
                
                {/* Achievement cards */}
                <div className="space-y-3">
                  <div className="bg-sage-green/20 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-sage-green rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gunmetal font-medium">Degree Qualified</span>
                  </div>
                  <div className="bg-sage-green/20 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-sage-green rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gunmetal font-medium">Language Certified</span>
                  </div>
                  <div className="bg-tigers-eye/20 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-tigers-eye rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gunmetal font-medium">Ready to Apply</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tigers-eye rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-sage-green rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
