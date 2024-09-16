import { useNavigate } from "react-router-dom";

import { useSupportCasesPagination } from "hooks/useSupportCasesPagination";
import { Filters } from "./Filters";
import { SupportCasesTable } from "./SupportCasesTable";
import { Pagination } from "components/Pagination";

export function SupportCases() {
  const {
    statusFilter,
    priorityFilter,
    currentPage,
    totalPages,
    prev,
    next,
    cases,
    isLoading,
    isError,
    error,
    setStatusFilter,
    setPriorityFilter,
    handlePageChange,
  } = useSupportCasesPagination();

  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/cases-detail/${id}`);
  };

  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
        List of case supports
      </h1>

      <Filters
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        setStatusFilter={setStatusFilter}
        setPriorityFilter={setPriorityFilter}
      />

      <div className="min-h-96 pb-10">
        <SupportCasesTable
          cases={cases}
          isLoading={isLoading}
          isError={isError}
          error={error}
          onRowClick={handleRowClick}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasPrevious={Boolean(prev)}
        hasNext={Boolean(next)}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
