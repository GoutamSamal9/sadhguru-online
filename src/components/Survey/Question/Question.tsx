import { ReactNode } from "react";
import {
  Answer,
  QuestionInterface,
  Validation,
} from "../../../interface/survey/questionInterface";
import MultilineTextBox from "../InputTypes/MultilineTextBox/MultilineTextBox";
import SingleLineTextBox from "../InputTypes/SingleLineTextBox/SingleLineTextBox";
import MultiChoiceMultipleAnswers from "../InputTypes/MultiChoiceMultipleAnswers/MultiChoiceMultipleAnswers";

interface QuestionProps {
  question: QuestionInterface;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  const input = (
    type: string,
    validation: Validation[],
    answer: Answer[]
  ): ReactNode => {
    switch (type) {
      case "Multi Line Text Box":
        return <MultilineTextBox validation={validation} />;
      case "Single Line Text Box":
        return <SingleLineTextBox validation={validation} />;
      case "Multi Choice - Multiple Answers":
        return <MultiChoiceMultipleAnswers answers={answer} />;

      default:
        break;
    }
  };

  return (
    <div className="flex w-[90%] m-auto  pb-4">
      <div className="w-[5%] text-2xl py-6 font-extrabold mr-10 sm:mr-2 ">{`(Q${question.id}).`}</div>
      <div className="w-[95%]">
        <div className="text-2xl py-6 font-extrabold ">{question.title}</div>
        <div>
          {input(
            question.type,
            question.validations ?? [],
            question.answers ?? []
          )}
        </div>
      </div>
    </div>
  );
};
export default Question;
