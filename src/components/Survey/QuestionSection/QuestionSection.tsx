import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import { QuestionInterface } from "../../../interface/survey/questionInterface";
import Question from "../Question/Question";
import { questions } from "../../../constants/questions";

const QuestionSection = () => {
  const questionsPerPage = 1;

 

  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    
      <div className="bg-[#e3ded5] w-full h-auto rounded-md px-4 py-4 sm:px-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        {currentQuestions.map((each: QuestionInterface, index: number) => (
          <Question question={each} key={each.id} />
        ))}
      </div>

  );
};
export default QuestionSection;
