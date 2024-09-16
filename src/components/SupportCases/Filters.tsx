import { FiltersProps } from "shared/types";

export function Filters({
  statusFilter,
  priorityFilter,
  setStatusFilter,
  setPriorityFilter,
}: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
      <div className="flex flex-col items-center">
        <label
          htmlFor="statusFilter"
          className="text-gray-300 font-semibold mb-1"
        >
          Status Filter
        </label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-gray-800 text-gray-300 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="flex flex-col items-center">
        <label
          htmlFor="priorityFilter"
          className="text-gray-300 font-semibold mb-1"
        >
          Priority Filter
        </label>
        <select
          id="priorityFilter"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="bg-gray-800 text-gray-300 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
    </div>
  );
}
