
import { GraduationCap, MapPin, Briefcase, Plane, Building2, GraduationCapIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface HeroProps {
  onCheckEligibility: () => void;
}

export const Hero = ({ onCheckEligibility }: HeroProps) => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

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
          
          {/* Right Column - Rotating Cards Carousel */}
          <div className="relative">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-md mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {/* Card 1: Visual Illustration */}
                <CarouselItem>
                  <div className="relative bg-gradient-to-br from-columbia-blue/20 to-pale-mint/30 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
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
                    <Plane className="absolute top-4 right-8 w-6 h-6 text-tigers-eye/60 rotate-45" />
                  </div>
                </CarouselItem>

                {/* Card 2: Testimonial Highlight */}
                <CarouselItem>
                  <div className="relative bg-gradient-to-br from-off-white to-sage-green/10 rounded-3xl p-8 border border-sage-green/20">
                    <div className="space-y-6">
                      {/* Quote bubble design */}
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                        <blockquote className="text-gunmetal text-lg leading-relaxed italic">
                          "No job. No visa? Think again. Chancenkarte got me to Berlin in 3 months."
                        </blockquote>
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45 border-r border-b border-sage-green/20"></div>
                      </div>
                      
                      {/* Profile section */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-tigers-eye to-tigers-eye/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          S
                        </div>
                        <div>
                          <div className="font-semibold text-gunmetal">Sameer, 29</div>
                          <div className="text-sm text-gunmetal/60">Marketing Manager, Berlin</div>
                        </div>
                      </div>
                      
                      {/* Success indicators */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-sage-green/20 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-sage-green">3</div>
                          <div className="text-xs text-gunmetal/70">Months</div>
                        </div>
                        <div className="bg-tigers-eye/20 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-tigers-eye">✓</div>
                          <div className="text-xs text-gunmetal/70">Success</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Card 3: Germany Inspiration */}
                <CarouselItem>
                  <div className="relative bg-gradient-to-br from-columbia-blue/20 to-off-white rounded-3xl p-8 border border-columbia-blue/30">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-satoshi font-bold text-gunmetal mb-2">
                          Why Germany?
                        </h3>
                        <div className="w-16 h-1 bg-tigers-eye rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Benefits list */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Briefcase className="w-4 h-4 text-sage-green" />
                          </div>
                          <div>
                            <div className="font-semibold text-gunmetal">#1 for job-seeking visa access</div>
                            <div className="text-sm text-gunmetal/60">Easiest pathway to work in Europe</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <GraduationCapIcon className="w-4 h-4 text-sage-green" />
                          </div>
                          <div>
                            <div className="font-semibold text-gunmetal">World-class opportunities</div>
                            <div className="text-sm text-gunmetal/60">Top universities and research facilities</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Building2 className="w-4 h-4 text-sage-green" />
                          </div>
                          <div>
                            <div className="font-semibold text-gunmetal">Vibrant cities & culture</div>
                            <div className="text-sm text-gunmetal/60">Safety, diversity, and quality of life</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* German skyline silhouette */}
                      <div className="relative mt-8">
                        <div className="flex items-end justify-center gap-1 opacity-20">
                          <div className="w-2 h-8 bg-gunmetal rounded-t"></div>
                          <div className="w-3 h-12 bg-gunmetal rounded-t"></div>
                          <div className="w-2 h-6 bg-gunmetal rounded-t"></div>
                          <div className="w-4 h-16 bg-gunmetal rounded-t"></div>
                          <div className="w-2 h-10 bg-gunmetal rounded-t"></div>
                          <div className="w-3 h-14 bg-gunmetal rounded-t"></div>
                          <div className="w-2 h-8 bg-gunmetal rounded-t"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-tigers-eye/30"></div>
                <div className="w-2 h-2 rounded-full bg-tigers-eye/30"></div>
                <div className="w-2 h-2 rounded-full bg-tigers-eye/30"></div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
