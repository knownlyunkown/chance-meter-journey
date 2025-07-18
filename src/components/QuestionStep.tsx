
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
    if (stepsRemaining === 1) return "Final step!";
    if (stepsRemaining === 2) return "Almost there!";
    if (stepsRemaining <= 3) return "Almost done!";
    return `${stepsRemaining} more steps to go!`;
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Compact Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gunmetal">
            {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-tigers-eye">
            {getProgressMessage()}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-2 rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-sage-green to-tigers-eye"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Compact Question Card */}
      <div className="bg-white rounded-chancenkarte p-6 shadow-lg border border-sage-green/10 mb-6">
        <h3 className="text-lg font-satoshi font-bold text-gunmetal mb-6 leading-relaxed">
          {question.question}
        </h3>

        {question.type === 'radio' ? (
          <RadioGroup value={currentAnswer} onValueChange={onAnswerChange}>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-transparent hover:border-sage-green/30 hover:bg-sage-green/5 transition-all duration-200 cursor-pointer">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="text-gunmetal cursor-pointer flex-1 font-medium text-sm leading-relaxed"
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
                className="w-full justify-between text-left h-12 text-sm border-2 hover:border-sage-green/50"
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
                  className="cursor-pointer py-2 px-3 hover:bg-sage-green/10"
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Compact Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex items-center gap-2 h-10 px-4 border-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className="bg-tigers-eye hover:bg-tigers-eye/90 text-white flex items-center gap-2 h-10 px-6 font-semibold"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
