
import { Calendar, CheckCircle } from 'lucide-react';

export const ExpertCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-sage-green to-sage-green/80 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Eligible for Chancenkarte</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-white mb-6">
              You're Eligible — Let's Turn That into a Plan
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free 15‑min call with our Chancenkarte specialist to create your personalized roadmap to Germany.
            </p>
          </div>
          
          <div className="space-y-6">
            <button className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-12 py-4 rounded-chancenkarte text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 w-full max-w-md mx-auto justify-center">
              <Calendar className="w-5 h-5" />
              Book My Call
            </button>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-satoshi font-bold text-white mb-2">15 min</div>
                <div className="text-white/80">Free consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-satoshi font-bold text-white mb-2">100%</div>
                <div className="text-white/80">Success-focused</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-satoshi font-bold text-white mb-2">Expert</div>
                <div className="text-white/80">Germany specialists</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
