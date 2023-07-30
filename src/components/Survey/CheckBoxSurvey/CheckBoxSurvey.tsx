import React from 'react';
import { useState } from 'react';

interface CheckboxSurveyProps {
  question: string;
  options: string[];
}

const CheckboxSurvey = ({ question, options }: CheckboxSurveyProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">{question}</h1>
      <form>
        {options.map((option) => (
          <div key={option} className="mb-4">
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleOptionChange}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CheckboxSurvey;
