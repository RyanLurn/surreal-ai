// React Scan must be imported before React and React DOM
import { scan } from "react-scan";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { AppRouter } from "@/components/app-router";
import { Providers } from "@/components/providers";

scan({
  enabled: process.env.NODE_ENV === "development",
});

// biome-ignore lint/style/noNonNullAssertion: Vite React's default
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>
);
