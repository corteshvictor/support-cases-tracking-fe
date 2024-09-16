import { useCallback, useState } from "react";
import { useSupportCases } from "hooks/useSupportCases";

export function useSupportCasesPagination() {
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, isError, error } = useSupportCases({
    status: statusFilter,
    priority: priorityFilter,
    page: currentPage,
  });

  const { next, prev, pages } = data?.info || {
    next: null,
    prev: null,
    pages: 0,
  };

  const cases = data?.cases || [];

  const handlePageChange = useCallback(
    (direction: "next" | "prev") => {
      if (direction === "next" && next) {
        setCurrentPage((prev) => prev + 1);
      } else if (direction === "prev" && prev) {
        setCurrentPage((prev) => prev - 1);
      }
    },
    [next, prev]
  );

  return {
    statusFilter,
    priorityFilter,
    currentPage,
    totalPages: pages,
    prev,
    next,
    cases,
    isLoading,
    isError,
    error,
    setStatusFilter,
    setPriorityFilter,
    setCurrentPage,
    handlePageChange,
  };
}
