import { useParams } from "react-router-dom";
import { useSupportCaseById } from "hooks/useSupportCases";

export function SupportCasesDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useSupportCaseById(id ?? "");

  if (isLoading) return <div className="text-gray-100">Loading...</div>;
  if (error)
    return <div className="text-red-400">Error loading case details.</div>;
  if (!data) return <div className="text-gray-100">No data available.</div>;

  const {
    id: supportCaseId,
    number,
    description,
    status,
    databaseName,
    schemaName,
    queryExecuted,
    executedBy,
    requester,
    priority,
  } = data;

  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
        Support Case Details
      </h1>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-md shadow-md">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
            <div className="font-medium text-gray-400">support Case Id:</div>
            <div>{supportCaseId}</div>
            <div className="font-medium text-gray-400">Number:</div>
            <div>{number}</div>
            <div className="font-medium text-gray-400">Description:</div>
            <div>{description}</div>
            <div className="font-medium text-gray-400">Status:</div>
            <div>{status}</div>
            <div className="font-medium text-gray-400">Database Name:</div>
            <div>{databaseName}</div>
            <div className="font-medium text-gray-400">Schema Name:</div>
            <div>{schemaName}</div>
            <div className="font-medium text-gray-400">Query Executed:</div>
            <code className="bg-gray-900 p-4 rounded-md font-mono text-sm">
              {queryExecuted}
            </code>
            <div className="font-medium text-gray-400">Executed By:</div>
            <div>{executedBy}</div>
            <div className="font-medium text-gray-400">Requester:</div>
            <div>{requester}</div>
            <div className="font-medium text-gray-400">Priority:</div>
            <div>{priority}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
