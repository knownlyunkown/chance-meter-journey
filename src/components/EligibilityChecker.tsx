
import { useState, useEffect } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

interface EligibilityCheckerProps {
  onScoreChange: (score: number) => void;
  hasStarted: boolean;
}

interface Criterion {
  id: string;
  question: string;
  description: string;
}

export const EligibilityChecker = ({ onScoreChange, hasStarted }: EligibilityCheckerProps) => {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showMeter, setShowMeter] = useState(false);

  const criteria: Criterion[] = [
    {
      id: 'degree',
      question: 'Do you hold a 2‑year vocational training or university degree?',
      description: 'Recognized qualification from your home country or Germany'
    },
    {
      id: 'language',
      question: 'Do you have German A1 or English B2 certification?',
      description: 'Valid language certificate from an accredited institution'
    },
    {
      id: 'experience',
      question: 'Have you lived or worked in Germany before?',
      description: 'Previous experience in Germany (work, study, or residence)'
    },
    {
      id: 'funds',
      question: 'Do you have proof of funds (blocked account or sponsor)?',
      description: 'Financial security of approximately €11,208 for 12 months'
    },
    {
      id: 'professional',
      question: 'Do you have 2+ years of professional experience?',
      description: 'Work experience in your field of study or expertise'
    }
  ];

  const score = Object.values(answers).filter(Boolean).length;
  const maxScore = criteria.length;
  const percentage = (score / maxScore) * 100;
  const isEligible = score >= 4;

  useEffect(() => {
    onScoreChange(score);
    
    // Show meter after user starts answering
    if (Object.keys(answers).length > 0) {
      setTimeout(() => setShowMeter(true), 300);
    }
  }, [answers, score, onScoreChange]);

  const handleAnswerChange = (criterionId: string, value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [criterionId]: value
    }));
  };

  const getMeterColor = () => {
    if (percentage < 50) return 'bg-red-500';
    if (percentage < 80) return 'bg-yellow-500';
    return 'bg-sage-green';
  };

  const getMeterStatus = () => {
    if (score === 0) return null;
    if (isEligible) {
      return {
        icon: Check,
        text: "Congratulations! You're eligible.",
        color: 'text-sage-green'
      };
    }
    return {
      icon: AlertCircle,
      text: "You're close — improve this to proceed",
      color: 'text-yellow-600'
    };
  };

  const status = getMeterStatus();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cb10 to-pale-mint">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-gunmetal mb-6">
              Tell us about you — we'll do the rest.
            </h2>
            <p className="text-xl text-gunmetal/70">
              Answer these quick questions to check your Chancenkarte eligibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Questions */}
            <div className="space-y-6">
              {criteria.map((criterion, index) => (
                <div
                  key={criterion.id}
                  className="bg-white rounded-chancenkarte p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ 
                    animationDelay: hasStarted ? `${index * 0.1}s` : '0s',
                    animation: hasStarted ? 'fade-in-up 0.6s ease-out both' : 'none'
                  }}
                >
                  <h3 className="font-semibold text-gunmetal mb-2">
                    {criterion.question}
                  </h3>
                  <p className="text-sm text-gunmetal/60 mb-4">
                    {criterion.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAnswerChange(criterion.id, true)}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-300 ${
                        answers[criterion.id] === true
                          ? 'border-sage-green bg-sage-green text-white'
                          : 'border-sage-green/20 hover:border-sage-green/40 text-gunmetal'
                      }`}
                    >
                      <Check className="w-4 h-4 mx-auto" />
                      <span className="sr-only">Yes</span>
                    </button>
                    <button
                      onClick={() => handleAnswerChange(criterion.id, false)}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-300 ${
                        answers[criterion.id] === false
                          ? 'border-red-400 bg-red-400 text-white'
                          : 'border-red-200 hover:border-red-300 text-gunmetal'
                      }`}
                    >
                      <X className="w-4 h-4 mx-auto" />
                      <span className="sr-only">No</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Eligibility Meter */}
            {showMeter && (
              <div className="lg:sticky lg:top-8 h-fit">
                <div className="bg-white rounded-chancenkarte p-8 shadow-lg animate-fade-in-up">
                  <h3 className="text-2xl font-satoshi font-bold text-gunmetal mb-6 text-center">
                    Your Eligibility
                  </h3>
                  
                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
                        className={`transition-all duration-1000 ease-out ${
                          percentage < 50 ? 'text-red-500' :
                          percentage < 80 ? 'text-yellow-500' : 'text-sage-green'
                        }`}
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl font-satoshi font-bold text-gunmetal">
                        {score}/{maxScore}
                      </div>
                      <div className="text-sm text-gunmetal/60">
                        criteria met
                      </div>
                    </div>
                  </div>

                  {/* Status Message */}
                  {status && (
                    <div className={`flex items-center justify-center gap-2 ${status.color} font-medium`}>
                      <status.icon className="w-5 h-5" />
                      <span>{status.text}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
