import { Answer } from "../../../../interface/survey/questionInterface";
import CheckBox from "../../../ReUsable/CheckBox/CheckBox";

interface MultiChoiceMultipleAnswersProps {
  answers: Answer[];
}

const MultiChoiceMultipleAnswers = ({
  answers,
}: MultiChoiceMultipleAnswersProps) => {
  console.log(answers);

  return (
    <div>
      {answers.map((each, index) => (
        <CheckBox key={each.id} label={each.value} value={each.id} id={each.id} />
      ))}
    </div>
  );
};
export default MultiChoiceMultipleAnswers;
