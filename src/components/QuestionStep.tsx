
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

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gunmetal/60">
            Question {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-gunmetal/60">
            {Math.round(progressPercentage)}% complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-sage-green h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-chancenkarte p-8 shadow-sm mb-8 animate-fade-in-up">
        <h3 className="text-xl font-satoshi font-bold text-gunmetal mb-6">
          {question.question}
        </h3>

        {question.type === 'radio' ? (
          <RadioGroup value={currentAnswer} onValueChange={onAnswerChange}>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-gunmetal cursor-pointer flex-1"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between text-left"
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
                  className="cursor-pointer"
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
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className="bg-sage-green hover:bg-sage-green/90 text-white flex items-center gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
