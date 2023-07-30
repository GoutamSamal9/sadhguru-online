import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, errorMessage, ...props }) => {
  const isError = !!errorMessage;

  return (
    <>
      <label
        htmlFor="email"
        className={`block text-lg font-bold leading-6 text-${isError ? 'red-600' : 'gray-900'}`}
      >
        {label}
      </label>
      <div className={`${label&&"mt-2"} ${isError ? 'border-red-500' : 'border-gray-300'}`}>
        <input
          {...props}
          className={`block w-full rounded-md pl-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ${isError ? 'border-red-500' : 'border-gray-300'} ${props.className} `}
        />
        {isError && (
          <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default InputField;
