
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface Question {
  id: string;
  question: string;
  type: 'radio' | 'dropdown';
  options: string[];
}

interface QuestionStepProps {
  question: Question;
  currentAnswer: string;
  onAnswerChange: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  currentStep: number;
  totalSteps: number;
}

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Bangladesh', 
  'Belgium', 'Brazil', 'Canada', 'China', 'Denmark', 'Egypt', 'France', 'Germany', 
  'Ghana', 'Greece', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy', 
  'Japan', 'Kenya', 'Mexico', 'Netherlands', 'Nigeria', 'Pakistan', 'Philippines', 
  'Poland', 'Russia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 
  'Thailand', 'Turkey', 'Ukraine', 'United Kingdom', 'United States', 'Vietnam'
];

export const QuestionStep = ({
  question,
  currentAnswer,
  onAnswerChange,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  currentStep,
  totalSteps
}: QuestionStepProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  const stepsRemaining = totalSteps - currentStep;
  
  const getProgressMessage = () => {
    if (stepsRemaining === 0) return "All done!";
    if (stepsRemaining === 1) return "Just 1 more step!";
    if (stepsRemaining <= 3) return "Almost done!";
    return `${stepsRemaining} more steps to go!`;
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Enhanced Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gunmetal">
            Question {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-tigers-eye">
            {getProgressMessage()}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-3 rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-sage-green to-tigers-eye"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="text-center mt-2">
          <span className="text-xs text-gunmetal/60">
            {Math.round(progressPercentage)}% complete
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-chancenkarte p-8 shadow-lg border border-sage-green/10 mb-8 animate-fade-in-up">
        <h3 className="text-xl font-satoshi font-bold text-gunmetal mb-8 leading-relaxed">
          {question.question}
        </h3>

        {question.type === 'radio' ? (
          <RadioGroup value={currentAnswer} onValueChange={onAnswerChange}>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg border-2 border-transparent hover:border-sage-green/30 hover:bg-sage-green/5 transition-all duration-200 cursor-pointer">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="text-gunmetal cursor-pointer flex-1 font-medium leading-relaxed"
                    >
                      {option}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between text-left h-14 text-base border-2 hover:border-sage-green/50"
              >
                {currentAnswer || 'Select your country...'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full max-h-60 overflow-y-auto">
              {(question.id === 'nationality' ? countries : question.options).map((option, index) => (
                <DropdownMenuItem 
                  key={index}
                  onClick={() => onAnswerChange(option)}
                  className="cursor-pointer py-3 px-4 hover:bg-sage-green/10"
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex items-center gap-2 h-12 px-6 border-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className="bg-tigers-eye hover:bg-tigers-eye/90 text-white flex items-center gap-2 h-12 px-8 font-semibold"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
