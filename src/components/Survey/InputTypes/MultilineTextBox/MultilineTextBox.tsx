import { Validation } from "../../../../interface/survey/questionInterface";
import TextArea from "../../../ReUsable/TextArea/TextArea";

interface MultilineTextBoxProps {
  validation: Validation[]; 
}

const MultilineTextBox = ({ validation }: MultilineTextBoxProps) => {
  return (
    <TextArea
      className="bg-[#f6f0e7]"
      label="Answer"
      rows={3}
      id="kk"
    />
  );
};

export default MultilineTextBox;
