import { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import Loading from "./components/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const LazyUserListPage = lazy(() => import("./pages/UserListPage"));
const LazyUserDetailPage = lazy(() => import("./pages/UserDetailPage"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<LazyUserListPage />} />
              <Route path="/user/:id" element={<LazyUserDetailPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
