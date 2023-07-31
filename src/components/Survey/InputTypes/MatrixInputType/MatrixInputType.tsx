import React from "react";
import RadioButton from "../../../ReUsable/RadioButton/RadioButton";

type Answer = {
  id: string;
  value: string;
};

type MatrixInputProps = {
  answers: Answer[];
  rows: string[];
};

const MatrixInput: React.FC<MatrixInputProps> = ({ answers, rows }) => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="grid grid-cols-4 gap-4">
        {rows.map((row) => (
          <React.Fragment key={row}>
            <div className="font-bold">{row}</div>
            {answers.map((answer) => (
              <div>
                <RadioButton
                  label={answer.value}
                  key={`${row}-${answer.id}`}
                  type="radio"
                  value={answer.id}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MatrixInput;
