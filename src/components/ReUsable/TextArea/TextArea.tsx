import React, { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  label: string;
  rows: number;
}

const TextArea: React.FC<TextAreaProps> = ({ id, label, rows, ...props }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...props} 
          rows={rows}
          name={id}
          id={id}
          className={` ${props.className} block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export default TextArea;
