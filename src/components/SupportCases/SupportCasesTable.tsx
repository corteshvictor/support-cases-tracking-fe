import { SupportCasesTableProps } from "shared/types";

export function SupportCasesTable({
  cases,
  isLoading,
  isError,
  error,
  onRowClick,
}: SupportCasesTableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Number
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Database Name
            </th>
            <th scope="col" className="px-6 py-3">
              Schema Name
            </th>
            <th scope="col" className="px-6 py-3">
              Executed By
            </th>
            <th scope="col" className="px-6 py-3">
              Requester
            </th>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={8} className="text-center py-4">
                Loading...
              </td>
            </tr>
          )}
          {isError && (
            <tr>
              <td colSpan={8} className="text-center py-4 text-red-500">
                {error?.message}
              </td>
            </tr>
          )}
          {cases.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
              onClick={() => onRowClick(item.id)}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.number}
              </th>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4">{item.databaseName}</td>
              <td className="px-6 py-4">{item.schemaName}</td>
              <td className="px-6 py-4">{item.executedBy}</td>
              <td className="px-6 py-4">{item.requester}</td>
              <td className="px-6 py-4">{item.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
