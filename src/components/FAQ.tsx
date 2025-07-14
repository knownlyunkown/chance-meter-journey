
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqs = [
    {
      question: "How is the Chancenkarte different from the Job Seeker Visa?",
      answer: "The Chancenkarte (Opportunity Card) uses a points-based system and allows part-time work during your job search, while the Job Seeker Visa requires higher qualifications and doesn't permit employment. The Chancenkarte is more accessible and flexible for most applicants."
    },
    {
      question: "What exactly is a blocked account and how much do I need?",
      answer: "A blocked account (Sperrkonto) is a special German bank account where you deposit funds that prove your financial capability. You need approximately €11,208 (€934 per month for 12 months) to demonstrate you can support yourself during your stay."
    },
    {
      question: "How long does the entire Chancenkarte process take?",
      answer: "The application process typically takes 2-4 months from document preparation to approval. This includes gathering documents, submitting your application, and waiting for processing by German authorities. Our specialists help streamline this process."
    },
    {
      question: "What happens after I get my Chancenkarte approved?",
      answer: "Once approved, you can move to Germany and have 12 months to find employment. You can work part-time (up to 20 hours/week) while job searching. When you secure full-time employment, you can convert to a residence permit for employment."
    },
    {
      question: "Can I bring my family with me on the Chancenkarte?",
      answer: "Initially, the Chancenkarte is issued only to the main applicant. However, once you secure employment and convert to a residence permit, you may be eligible to bring family members through family reunification procedures."
    },
    {
      question: "What if I don't find a job within 12 months?",
      answer: "If you don't secure employment within 12 months, you'll need to leave Germany. However, our success rate is high because we provide comprehensive job search support, including CV optimization, interview preparation, and networking strategies specific to the German job market."
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 lg:py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-gunmetal mb-6">
              Got doubts? We've clarified them all.
            </h2>
            <p className="text-xl text-gunmetal/70">
              Everything you need to know about the Chancenkarte process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-chancenkarte border border-sage-green/10 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-pale-mint/30 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-gunmetal pr-4">
                    {faq.question}
                  </h3>
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-sage-green flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sage-green flex-shrink-0" />
                  )}
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <div className="pt-4 border-t border-sage-green/10">
                      <p className="text-gunmetal/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
