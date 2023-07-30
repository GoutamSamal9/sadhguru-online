import { Link } from "react-router-dom";
import Icon from "../../../utils/Icon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      className="border-b-[1px] border-gray-600 px-4 pb-4 sm:px-6"
      aria-label="Pagination"
    >
      <div className="flex flex-1 items-center justify-between">
        <div>
          <Link
            to="#"
            onClick={handlePrevClick}
            className="relative inline-flex items-center rounded-md bg-[#f6f0e7] px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            <Icon icon={faArrowLeft} />
          </Link>
        </div>
        <div>
          <p className="text-md text-gray-700">
            Stage <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span> completed
          </p>
        </div>
        <div>
          <Link
            to="#"
            onClick={handleNextClick}
            className="relative ml-3 inline-flex items-center rounded-md bg-[#f6f0e7] px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            <Icon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
