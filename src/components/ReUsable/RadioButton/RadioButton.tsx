import React, { InputHTMLAttributes } from "react";
import InputField from "../InputField/InputField";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...props }) => {
  return (
    <fieldset>
      <legend className="sr-only">{label}</legend>
      <div className="space-y-4">
        <div className="flex items-center">
          <InputField
            {...props}
            id={label}
            name={"RadioButton"}
            type="radio"
            value={props.value}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor={label}
            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default RadioButton;
