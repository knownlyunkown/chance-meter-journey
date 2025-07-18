
import { Calendar, CheckCircle, Star } from 'lucide-react';

export const ExpertCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-sage-green to-sage-green/80 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main CTA */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Eligible for Chancenkarte</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-white mb-6">
                  You're Eligible — Let's Turn That Into a Plan
                </h2>
                
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Schedule a 15-min expert call for just <span className="font-bold text-tigers-eye">₹349</span> 
                  <span className="line-through text-white/60 ml-2">₹499</span>
                </p>
                
                <p className="text-white/80 mb-8">
                  That's just the cost of a pizza — and it's totally worth it.
                </p>
              </div>
              
              <button className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-12 py-4 rounded-chancenkarte text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Book My Call
              </button>
              
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-satoshi font-bold text-white mb-2">15 min</div>
                  <div className="text-white/80 text-sm">Expert consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-satoshi font-bold text-white mb-2">₹349</div>
                  <div className="text-white/80 text-sm">One-time fee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-satoshi font-bold text-white mb-2">200+</div>
                  <div className="text-white/80 text-sm">Success stories</div>
                </div>
              </div>
            </div>

            {/* Right Column - Expert Profile */}
            <div className="bg-white/10 backdrop-blur-sm rounded-chancenkarte p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-columbia-blue to-tigers-eye rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  👨‍💼
                </div>
                <h3 className="text-2xl font-satoshi font-bold text-white mb-2">
                  Akshar Tank
                </h3>
                <p className="text-white/80 mb-4">
                  Founder, UNI 360°
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-tigers-eye fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-4 text-white/90">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0" />
                  <span className="text-sm">15+ years of experience helping students navigate education systems worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0" />
                  <span className="text-sm">200+ successful Chancenkarte applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0" />
                  <span className="text-sm">Expert in German visa processes</span>
                </div>
              </div>
              
              <blockquote className="mt-6 p-4 bg-white/5 rounded-lg border-l-4 border-tigers-eye">
                <p className="text-white/90 italic text-sm">
                  "Let's make Germany happen — the right way. I've helped hundreds of students and professionals navigate this journey successfully."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
