import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import "./assets/index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "styled-components";
import mainTheme from "./themes/mainTheme";
import GlobalStyle from "./themes/GlobalStyle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
