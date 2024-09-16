import { useQuery } from "@tanstack/react-query";

import { fetchSupportCases, getSupportCaseById } from "services/support-cases";
import { SupportCasesFilters } from "shared/types";

export function useSupportCases(filters?: SupportCasesFilters) {
  return useQuery({
    queryKey: ["support_cases", filters],
    queryFn: () => fetchSupportCases(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  });
}

export function useSupportCaseById(id: string) {
  return useQuery({
    queryKey: ["support_cases", id],
    queryFn: () => getSupportCaseById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  });
}
