import React, { useState } from "react";
import { Validation } from "../../../../interface/survey/questionInterface";
import InputField from "../../../ReUsable/InputField/InputField";

interface SingleLineTextBoxProps {
  validation: Validation[];
  type?: string
}

const SingleLineTextBox = ({ validation }: SingleLineTextBoxProps) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    let newErrorMessage = "";
    for (const validator of validation) {
      if (validator.type === "email") {
        if (!isValidEmail(inputValue)) {
          newErrorMessage = validator.errorMessage;
          break;
        }
      } else if (validator.type === "length") {
        if (
          inputValue.length < validator.minLength! ||
          inputValue.length > validator.maxLength!
        ) {
          newErrorMessage = validator.errorMessage;
          break;
        }
      }
    }
    setErrorMessage(newErrorMessage);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <InputField
      className="bg-[#f6f0e7]"
      label="Single Answer"
      id="kk"
      value={value}
      onChange={handleInputChange}
      onBlur={() => setErrorMessage("")}
      errorMessage={errorMessage}
    />
  );
};

export default SingleLineTextBox;
