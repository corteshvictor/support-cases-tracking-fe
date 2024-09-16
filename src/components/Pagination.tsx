import { PaginationProps } from "shared/types";

export function Pagination({
  currentPage,
  hasPrevious,
  hasNext,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        type="button"
        onClick={() => onPageChange("prev")}
        disabled={!hasPrevious}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-600"
      >
        Previous
      </button>
      <span className="text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onPageChange("next")}
        disabled={!hasNext}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-600"
      >
        Next
      </button>
    </div>
  );
}
