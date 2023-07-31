import React, { InputHTMLAttributes } from "react";
import InputField from "../InputField/InputField";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  description,
  ...props
}) => {
  return (
    <fieldset>
      <legend className="sr-only">{label}</legend>
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <InputField
              {...props}
              aria-describedby={`${props.id}-description`}
              name={props.id}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
              value={props.value}
            />
          </div>
          <div className="ml-3  leading-6">
            <label htmlFor={props.id} className="text-md font-medium text-gray-900">
              {label}
            </label>
            <p id={`${props.id}-description`} className="text-gray-500 text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CheckBox;
