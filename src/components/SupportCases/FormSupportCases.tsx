import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { FormSupport } from "shared/types";
import { Priority, Status } from "shared/enums";
import { useAddSupportCases } from "hooks/useAddSupportCases";

export function FormSupportCases() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSupport>();
  const navigate = useNavigate();
  const { mutate, isSuccess, isPending } = useAddSupportCases();
  const onSubmit: SubmitHandler<FormSupport> = (data) => mutate(data);

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate("/cases");
    }
  }, [isSuccess, navigate, reset]);

  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-6"
        autoComplete="off"
      >
        <h1 className="text-3xl font-bold mb-6">Support Case Form</h1>

        <div className="space-y-2">
          <label htmlFor="number" className="block text-sm font-medium">
            Number
          </label>
          <input
            {...register("number", {
              required: "This field is required",
              maxLength: { value: 15, message: "Max length is 15" },
            })}
            id="number"
            placeholder="SC-0001"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.number && (
            <p className="text-red-400">{`⚠ ${errors.number.message}`}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            placeholder="Description"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="block text-sm font-medium">
            Status
          </label>
          <select
            {...register("status")}
            id="status"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.values(Status).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="database_name" className="block text-sm font-medium">
            Database Name
          </label>
          <input
            {...register("database_name")}
            id="database_name"
            placeholder="Database Name"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="schema_name" className="block text-sm font-medium">
            Schema Name
          </label>
          <input
            {...register("schema_name")}
            id="schema_name"
            placeholder="Schema Name"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="query_executed" className="block text-sm font-medium">
            Query Executed
          </label>
          <textarea
            {...register("query_executed")}
            id="query_executed"
            placeholder="Query Executed"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="executed_by" className="block text-sm font-medium">
            Executed By
          </label>
          <input
            {...register("executed_by")}
            id="executed_by"
            placeholder="Executed By"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="requester" className="block text-sm font-medium">
            Requester
          </label>
          <input
            {...register("requester")}
            id="requester"
            placeholder="Requester"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="priority" className="block text-sm font-medium">
            Priority
          </label>
          <select
            {...register("priority")}
            id="priority"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.values(Priority).map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          disabled={isPending}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
