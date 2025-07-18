
import { useState, useEffect } from 'react';
import { Check, AlertCircle, ExternalLink } from 'lucide-react';
import { QuestionStep } from './QuestionStep';

interface EligibilityCheckerProps {
  onScoreChange: (score: number) => void;
  hasStarted: boolean;
}

interface Question {
  id: string;
  question: string;
  type: 'radio' | 'dropdown';
  options: string[];
}

export const EligibilityChecker = ({ onScoreChange, hasStarted }: EligibilityCheckerProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 'nationality',
      question: 'What is your nationality?',
      type: 'dropdown',
      options: []
    },
    {
      id: 'residence',
      question: 'Is your country of residence different from your nationality?',
      type: 'radio',
      options: ['Yes', 'No']
    },
    {
      id: 'qualification',
      question: 'Do you have a qualification that required at least 2 years to complete?',
      type: 'radio',
      options: [
        'Yes, I hold a professional qualification (vocational training)',
        'Yes, I have a university degree',
        'Yes, I have an appropriate qualification from a German Chamber of Commerce abroad',
        'No, I do not have any formal professional qualifications'
      ]
    },
    {
      id: 'recognition',
      question: 'Did you obtain your qualification in Germany, or is it partially or fully recognized there?',
      type: 'radio',
      options: [
        'Yes, I obtained my professional qualification or university degree in Germany',
        'I don\'t know',
        'No, my qualification is not recognized in Germany',
        'Yes, my qualification is fully recognized in Germany',
        'Yes, my qualification is partially recognized in Germany'
      ]
    },
    {
      id: 'german',
      question: 'How well do you speak German?',
      type: 'radio',
      options: [
        'Fluent or better (B2 and above)',
        'Colloquial (B1)',
        'Adequate (A2)',
        'Little (A1)',
        'Not at all'
      ]
    },
    {
      id: 'english',
      question: 'How well do you speak English?',
      type: 'radio',
      options: [
        'Fluent or better (B2 and above)',
        'Colloquial (B1)',
        'Adequate (A2)',
        'Little (A1)',
        'Not at all'
      ]
    },
    {
      id: 'age',
      question: 'What is your age?',
      type: 'radio',
      options: [
        'Between the age of 18 and 34',
        'Between the age of 35 and 39',
        '40 years or older'
      ]
    },
    {
      id: 'workExperience',
      question: 'Do you possess work experience relevant to your professional qualification or university degree?',
      type: 'radio',
      options: ['Yes', 'No']
    },
    {
      id: 'experienceYears',
      question: 'How many years of experience do you have in this field?',
      type: 'radio',
      options: [
        'I can provide evidence of at least 5 years of professional experience within the past 7 years',
        'I can provide evidence of at least 2 years of professional experience within the last 5 years',
        'I can provide evidence of 2 years or less of professional experience'
      ]
    },
    {
      id: 'bottleneck',
      question: 'Is your formal qualification in a "bottleneck profession"?',
      type: 'radio',
      options: [
        'Natural sciences, mathematics, engineering',
        'Healthcare',
        'Educational sector (teacher)',
        'Information technology',
        'No'
      ]
    },
    {
      id: 'residence6months',
      question: 'Have you resided legally in Germany for a continuous period of at least 6 months in the last 5 years?',
      type: 'radio',
      options: [
        'Yes, I have resided in Germany for a minimum of 6 months',
        'No, I have never lived in Germany or have not stayed there for more than 6 months'
      ]
    },
    {
      id: 'partner',
      question: 'Do you have a partner who also wishes to enter Germany with an opportunity card?',
      type: 'radio',
      options: [
        'Yes, I would like to move to Germany with my partner',
        'No, I will be moving to Germany alone'
      ]
    },
    {
      id: 'partnerEligible',
      question: 'Is your partner eligible for an opportunity card?',
      type: 'radio',
      options: [
        'Yes, my partner\'s qualifications are fully recognized in Germany',
        'Yes, my partner has obtained a score of at least 5 points in the points system',
        'We don\'t know',
        'No, my partner does not meet the criteria'
      ]
    },
    {
      id: 'finances',
      question: 'Do you have sufficient financial resources to secure your livelihood? (At least 13,092 euros per person)',
      type: 'radio',
      options: [
        'Yes, I have the financial means',
        'I do not possess the required amount'
      ]
    },
    {
      id: 'jobOffer',
      question: 'Do you already have a job offer from an employer in Germany?',
      type: 'radio',
      options: ['Yes', 'No']
    }
  ];

  const calculateEligibilityScore = () => {
    let score = 0;
    
    // Simplified scoring logic - you can adjust this based on requirements
    if (answers.qualification?.includes('Yes')) score += 1;
    if (answers.german?.includes('B2') || answers.german?.includes('B1')) score += 1;
    if (answers.english?.includes('B2')) score += 1;
    if (answers.age?.includes('18 and 34')) score += 1;
    if (answers.workExperience === 'Yes') score += 1;
    if (answers.experienceYears?.includes('5 years')) score += 2;
    if (answers.bottleneck !== 'No') score += 1;
    if (answers.residence6months?.includes('Yes')) score += 1;
    if (answers.finances?.includes('Yes')) score += 1;
    
    return score;
  };

  const score = calculateEligibilityScore();
  const isEligible = score >= 6; // Adjust threshold as needed

  useEffect(() => {
    onScoreChange(score);
  }, [score, onScoreChange]);

  const handleAnswerChange = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentStep - 1].id]: answer
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const currentQuestion = questions[currentStep - 1];
  const currentAnswer = answers[currentQuestion?.id] || '';
  const canGoNext = currentAnswer !== '';
  const canGoPrevious = currentStep > 1;

  if (showResults) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-cb10 to-pale-mint">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-chancenkarte p-8 shadow-lg animate-fade-in-up">
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                isEligible ? 'bg-sage-green/20' : 'bg-yellow-100'
              }`}>
                {isEligible ? (
                  <Check className="w-8 h-8 text-sage-green" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-yellow-600" />
                )}
              </div>
              
              <h3 className="text-2xl font-satoshi font-bold text-gunmetal mb-4">
                {isEligible ? "Congratulations! You're eligible." : "You're close — improve this to proceed"}
              </h3>
              
              <p className="text-gunmetal/70 mb-6">
                Your eligibility score: {score} points
              </p>
              
              {isEligible && (
                <button className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-8 py-3 rounded-chancenkarte font-semibold transition-all duration-300">
                  Get Expert Guidance
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cb10 to-pale-mint">
      <div className="container mx-auto px-4">
        {/* UNI 360 Branding Header */}
        <div className="flex justify-between items-start mb-8">
          <div></div>
          <div className="text-right space-y-2">
            {/* UNI 360 Branding */}
            <div className="flex items-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1 text-sm">
                🎉 <span className="text-tigers-eye font-medium">UNI 360 is launching soon. Get early access now!</span>
              </div>
              <button className="bg-tigers-eye hover:bg-tigers-eye/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                Join Early Access
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-satoshi font-bold text-gunmetal">UNI 360</h2>
              <button className="flex items-center gap-1 text-tigers-eye hover:text-tigers-eye/80 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-satoshi font-bold text-gunmetal mb-6">
            Tell us about you — we'll do the rest.
          </h2>
          <p className="text-xl text-gunmetal/70">
            Answer these questions to check your Chancenkarte eligibility.
          </p>
        </div>

        <QuestionStep
          question={currentQuestion}
          currentAnswer={currentAnswer}
          onAnswerChange={handleAnswerChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoNext={canGoNext}
          canGoPrevious={canGoPrevious}
          currentStep={currentStep}
          totalSteps={questions.length}
        />
      </div>
    </section>
  );
};
