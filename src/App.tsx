import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello Word!</h1>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
