import {
  FormSupport,
  SupportCases,
  SupportCasesFilters,
  SupportCasesResponse,
} from "shared/types";
import { removeFalsyValues } from "shared/utils";

const SUPPORT_CASES_API_URL = "http://localhost:8000";

export async function createSupportCase(data: FormSupport) {
  const response = await fetch(`${SUPPORT_CASES_API_URL}/support_cases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create support case.");
  }

  const supportCase: SupportCases = await response.json();

  const mappedSupportCase = {
    id: supportCase.id,
    number: supportCase.number,
    description: supportCase.description,
    status: supportCase.status,
    priority: supportCase.priority,
    databaseName: supportCase.database_name,
    schemaName: supportCase.schema_name,
    queryExecuted: supportCase.query_executed,
    executedBy: supportCase.executed_by,
    requester: supportCase.requester,
    createdAt: new Date(supportCase.created_at),
    updatedAt: new Date(supportCase.updated_at),
  };

  return mappedSupportCase;
}

export async function fetchSupportCases(filters?: SupportCasesFilters) {
  const cleanedFilters = removeFalsyValues(filters || {});
  const queryParams = new URLSearchParams(cleanedFilters);
  const queryString = queryParams.toString();

  const url = queryString
    ? `${SUPPORT_CASES_API_URL}/support_cases?${queryParams.toString()}`
    : `${SUPPORT_CASES_API_URL}/support_cases`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch support cases.");
  }

  const { info, results }: SupportCasesResponse = await response.json();

  const mappedSupportCases = results.map((supportCase) => ({
    id: supportCase.id,
    number: supportCase.number,
    description: supportCase.description,
    status: supportCase.status,
    priority: supportCase.priority,
    databaseName: supportCase.database_name,
    schemaName: supportCase.schema_name,
    queryExecuted: supportCase.query_executed,
    executedBy: supportCase.executed_by,
    requester: supportCase.requester,
    createdAt: new Date(supportCase.created_at),
    updatedAt: new Date(supportCase.updated_at),
  }));

  return { cases: mappedSupportCases, info };
}

export async function getSupportCaseById(id: string) {
  const response = await fetch(`${SUPPORT_CASES_API_URL}/support_cases/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch support case.");
  }

  const supportCase: SupportCases = await response.json();

  const mappedSupportCase = {
    id: supportCase.id,
    number: supportCase.number,
    description: supportCase.description,
    status: supportCase.status,
    priority: supportCase.priority,
    databaseName: supportCase.database_name,
    schemaName: supportCase.schema_name,
    queryExecuted: supportCase.query_executed,
    executedBy: supportCase.executed_by,
    requester: supportCase.requester,
    createdAt: new Date(supportCase.created_at),
    updatedAt: new Date(supportCase.updated_at),
  };

  return mappedSupportCase;
}
