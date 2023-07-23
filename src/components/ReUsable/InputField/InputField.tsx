import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <>
      <label
        htmlFor="email"
        className="block text-lg font-bold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input {...props}
        className={`${props.className} block w-full rounded-md pl-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6`}
        />
      </div>
    </>
  );
};

export default InputField;
