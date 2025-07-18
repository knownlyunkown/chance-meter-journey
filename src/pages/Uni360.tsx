import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Uni360 = () => {
  const features = [
    {
      title: "Application Tracking",
      description: "Track your university applications in real-time — from submission to decision."
    },
    {
      title: "Dedicated Support Team", 
      description: "Talk to real experts who understand the German education system inside-out."
    },
    {
      title: "End-to-End Services",
      description: "From SOP review to visa appointment booking — we handle it all."
    },
    {
      title: "Scholarship & Funding Help",
      description: "We help you discover and apply for scholarships that suit your profile."
    },
    {
      title: "Germany-Focused",
      description: "Our platform is tailored specifically for students targeting Germany."
    },
    {
      title: "Transparent Timeline",
      description: "Know what's next. Our dashboard keeps you informed at every step."
    }
  ];

  const scrollToEligibility = () => {
    // This would scroll to eligibility section or navigate back to main page
    window.location.href = '/#eligibility-checker';
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Navigation onCheckEligibility={scrollToEligibility} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gunmetal mb-6">
            UNI 360° — Your Study Abroad{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Command Center
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From applications to arrival in Germany, UNI 360° is your complete companion every step of the way.
          </p>
          
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium">
            Get Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gunmetal mb-16">
            Everything You Need in One Place
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gunmetal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-purple-50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gunmetal mb-8">
              Why Choose UNI 360°?
            </h2>
            
            <p className="text-2xl text-gray-700 mb-12 font-medium">
              "Because going abroad is a big deal. And you shouldn't have to do it alone."
            </p>
            
            <Card className="p-8 bg-white shadow-lg">
              <blockquote className="text-lg text-gray-600 italic mb-6">
                "UNI 360° transformed my study abroad journey. From university applications to visa assistance, 
                they were with me every step of the way. I couldn't have made it to Germany without their support."
              </blockquote>
              <cite className="text-sm text-gray-500">
                — Sarah M., Currently studying in Berlin
              </cite>
            </Card>
            
            <div className="mt-12 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg font-medium"
                onClick={scrollToEligibility}
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Uni360;