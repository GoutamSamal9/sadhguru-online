import React, { InputHTMLAttributes } from "react";
import InputField from "../../../ReUsable/InputField/InputField";

interface DateTimeInputTypeProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const DateTimeInputType: React.FC<DateTimeInputTypeProps> = ({ label, ...props }) => {
  return (
    <div className="w-1/3">
      <label
        htmlFor={label}
        className="block text-lg font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <InputField
        {...props}
        name={"DateTimeInputType"}
        type="datetime-local"
        className="border-gray-300 text-indigo-600 focus:ring-indigo-600 pr-4"
      />
    </div>
  );
};

export default DateTimeInputType;
