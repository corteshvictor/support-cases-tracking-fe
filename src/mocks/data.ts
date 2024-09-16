import { Priority, Status } from "shared/enums";

export const SUPPORT_CASES = [
  {
    id: 1,
    number: "SC001",
    description: "Initial setup of the database schema.",
    status: "Open",
    priority: "Medium",
    database_name: "main_db",
    schema_name: "public",
    query_executed: "CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT);",
    executed_by: "admin",
    requester: "user1",
    created_at: "2024-09-15T19:39:03.413548-05:00",
    updated_at: "2024-09-15T19:39:03.413548-05:00",
  },
  {
    id: 2,
    number: "SC002",
    description: "Update user table to add email column.",
    status: "In Progress",
    priority: "High",
    database_name: "main_db",
    schema_name: "public",
    query_executed: "ALTER TABLE users ADD COLUMN email TEXT;",
    executed_by: "admin",
    requester: "user2",
    created_at: "2024-09-15T19:39:03.413548-05:00",
    updated_at: "2024-09-15T19:39:03.413548-05:00",
  },
  {
    id: 3,
    number: "SC003",
    description: "Optimize the performance of the orders table.",
    status: "Closed",
    priority: "Critical",
    database_name: "orders_db",
    schema_name: "sales",
    query_executed: "CREATE INDEX idx_orders_date ON orders (order_date);",
    executed_by: "admin",
    requester: "user3",
    created_at: "2024-09-15T19:39:03.413548-05:00",
    updated_at: "2024-09-15T19:39:03.413548-05:00",
  },
];

export const CASE = {
  id: 4,
  number: "SC004",
  description: "Create a new database for the marketing team.",
  status: "Open",
  priority: "Low",
  databaseName: "marketing_db",
  schemaName: "public",
  queryExecuted: "CREATE DATABASE marketing_db;",
  executedBy: "admin",
  requester: "user4",
  createdAt: undefined,
  updatedAt: undefined,
};

export const NEW_CASE = {
  number: "SC004",
  description: "Create a new database for the marketing team.",
  status: Status.Open,
  priority: Priority.Low,
  database_name: "marketing_db",
  schema_name: "public",
  query_executed: "CREATE DATABASE marketing_db;",
  executed_by: "admin",
  requester: "user4",
};