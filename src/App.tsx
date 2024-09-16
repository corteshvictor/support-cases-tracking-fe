import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import "App.css";
import { Layout } from "components/Layout";
import { Container } from "components/Container";
import { NotFound } from "components/NotFound";
import { FormSupportCases } from "components/SupportCases/FormSupportCases";
import { SupportCases } from "components/SupportCases/SupportCases";
import { SupportCasesDetails } from "components/SupportCases/SupportCasesDetails";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<FormSupportCases />} />
              <Route path="cases" element={<SupportCases />} />
              <Route path="cases-detail/:id" element={<SupportCasesDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster richColors />
        </Container>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
