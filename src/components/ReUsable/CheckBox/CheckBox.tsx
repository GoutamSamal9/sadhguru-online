import React from 'react';
import InputField from '../InputField/InputField';

interface CheckBoxProps {
  id: string;
  label: string;
  description?: string;
  value: string
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, label, description, value }) => {
  return (
    <fieldset>
      <legend className="sr-only">{label}</legend>
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <InputField
              id={id}
              aria-describedby={`${id}-description`}
              name={id}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
              value={value}
            />
          </div>
          <div className="ml-3  leading-6">
            <label htmlFor={id} className="text-md font-medium text-gray-900">
              {label}
            </label>
            <p id={`${id}-description`} className="text-gray-500 text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CheckBox;
