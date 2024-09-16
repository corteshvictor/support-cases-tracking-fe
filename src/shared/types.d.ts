export type Priority = "Low" | "Medium" | "High" | "Critical";
export type Status = "Open" | "In Progress" | "Closed" | "Resolved";

export interface FormSupport {
  number: string;
  description: string;
  status: Status;
  priority: Priority;
  database_name: string;
  schema_name: string;
  query_executed: string;
  executed_by: string;
  requester: string;
}

export interface SupportCases extends FormSupport {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};

export type SupportCasesResponse = {
  info: Info;
  results: SupportCases[];
};

export type SupportCasesFilters = {
  page?: number;
  status?: string;
  priority?: string;
  description?: string;
  databaseName?: string;
  requester?: string;
  executedBy?: string;
};

export type FiltersProps = {
  statusFilter: string;
  priorityFilter: string;
  setStatusFilter: (status: string) => void;
  setPriorityFilter: (priority: string) => void;
};

export type SupportCasesTableProps = {
  cases: SupportCase[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  onRowClick: (id: number) => void;
};

export type PaginationProps = {
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  totalPages: number;
  onPageChange: (direction: "next" | "prev") => void;
};
