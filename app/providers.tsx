"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ColorModeContext = createContext({
  toggleTheme: () => {},
  mode: "light" as "light" | "dark",
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

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
