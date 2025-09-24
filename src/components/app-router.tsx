import { BrowserRouter, Route, Routes } from "react-router";
import App from "@/App.tsx";
import { RootLayout } from "@/components/root-layout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<App />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
