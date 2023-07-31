import { Answer } from "../../../../interface/survey/questionInterface";
import RadioButton from "../../../ReUsable/RadioButton/RadioButton";

interface SingleChoiceAnswersProps {
  answers: Answer[];
}

const SingleChoiceAnswers = ({
  answers,
}: SingleChoiceAnswersProps) => {
  console.log(answers);

  return (
    <div>
      {answers.map((each, index) => (
        <RadioButton key={each.id} label={each.value} value={each.id} id={each.id} />
      ))}
    </div>
  );
};
export default SingleChoiceAnswers;
