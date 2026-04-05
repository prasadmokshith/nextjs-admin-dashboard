"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// OPTIONAL (good for debugging)
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ColorModeContext = createContext({
  toggleTheme: () => {},
  mode: "light" as "light" | "dark",
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // ✅ React Query Client (IMPORTANT)
  const [queryClient] = useState(() => new QueryClient());

  // ✅ Theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider
        value={{
          mode,
          toggleTheme: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>

      {/* ✅ Devtools (optional) */}
    </QueryClientProvider>
  );
}
