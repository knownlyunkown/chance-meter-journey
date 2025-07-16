
import { Clock, Globe, Users, Shield } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Clock,
      title: "12-month residence permit",
      description: "Get a full year to search for employment opportunities while living in Germany."
    },
    {
      icon: Globe,
      title: "No job offer required",
      description: "Move to Germany first, then find the perfect job that matches your skills."
    },
    {
      icon: Users,
      title: "Part-time work allowed",
      description: "Earn income with up to 20 hours per week while actively job searching."
    },
    {
      icon: Shield,
      title: "Path to permanent residency",
      description: "Convert to a work permit or EU Blue Card once you secure employment."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-pale-mint to-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-gunmetal mb-6">
              What is the Chancenkarte?
            </h2>
            <p className="text-xl text-gunmetal/70 max-w-3xl mx-auto leading-relaxed">
              Germany's Opportunity Card (Chancenkarte) is a revolutionary residence permit designed for 
              non-EU skilled individuals. It allows you to live in Germany for up to 12 months while 
              searching for employment, without needing a job offer first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-chancenkarte p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-green/20 rounded-chancenkarte flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-sage-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-satoshi font-bold text-gunmetal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gunmetal/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-chancenkarte p-8 shadow-sm">
            <h3 className="text-2xl font-satoshi font-bold text-gunmetal mb-6 text-center">
              Who's Eligible?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-columbia-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold text-gunmetal mb-2">Education</h4>
                <p className="text-sm text-gunmetal/70">2+ years vocational training or university degree</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-columbia-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h4 className="font-semibold text-gunmetal mb-2">Language</h4>
                <p className="text-sm text-gunmetal/70">German A1 or English B2 certification</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-columbia-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-gunmetal mb-2">Funds</h4>
                <p className="text-sm text-gunmetal/70">Proof of financial support (~€11,208)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
