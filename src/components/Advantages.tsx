
import { MapPin, Clock, Briefcase } from 'lucide-react';

export const Advantages = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Move first, find work later",
      description: "Relocate to Germany before securing employment and search for opportunities while already there."
    },
    {
      icon: Clock,
      title: "Work part-time during job search",
      description: "Earn income with up to 20 hours per week of work while actively seeking full-time employment."
    },
    {
      icon: Briefcase,
      title: "Stay in Germany for up to 12 months",
      description: "Get a full year to establish yourself, network, and find the perfect career opportunity."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-gunmetal mb-6">
            Why the Chancenkarte is made for you
          </h2>
          <p className="text-xl text-gunmetal/70 max-w-2xl mx-auto">
            Germany's Opportunity Card opens doors to your career dreams with unprecedented flexibility.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-pale-mint to-off-white rounded-chancenkarte p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-sage-green/20 rounded-chancenkarte flex items-center justify-center group-hover:bg-sage-green/30 transition-colors duration-300">
                  <advantage.icon className="w-8 h-8 text-sage-green" />
                </div>
              </div>
              
              <h3 className="text-xl font-satoshi font-bold text-gunmetal mb-4">
                {advantage.title}
              </h3>
              
              <p className="text-gunmetal/70 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
