
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya",
      age: 22,
      quote: "I moved with no offer. Chancenkarte helped me find a job in Munich within 4 months!",
      avatar: "👩‍💻",
      role: "Software Developer"
    },
    {
      name: "Sameer",
      age: 29,
      quote: "From Delhi to Berlin in 3 months. Easiest decision ever. The guidance was invaluable.",
      avatar: "👨‍💼",
      role: "Marketing Manager"
    },
    {
      name: "Fiona",
      age: 34,
      quote: "Balanced family and job-hunt thanks to Chancenkarte. Found my dream role in Hamburg.",
      avatar: "👩‍🔬",
      role: "Research Scientist"
    },
    {
      name: "Rajiv",
      age: 42,
      quote: "Didn't think I was eligible. Turns out, I was ready all along. Now working in Frankfurt!",
      avatar: "👨‍🏫",
      role: "Senior Engineer"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-gunmetal mb-6">
            Success Stories from Germany
          </h2>
          <p className="text-xl text-gunmetal/70 max-w-2xl mx-auto">
            Real people, real journeys, real success in Germany.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-chancenkarte p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-columbia-blue to-sage-green rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                  {testimonial.avatar}
                </div>
                <h3 className="font-satoshi font-bold text-gunmetal">
                  {testimonial.name}, {testimonial.age}
                </h3>
                <p className="text-sm text-tigers-eye font-medium">
                  {testimonial.role}
                </p>
              </div>
              
              <blockquote className="text-gunmetal/80 text-sm leading-relaxed italic text-center">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-tigers-eye text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
