import { Outlet } from "react-router";
import { ModeToggle } from "@/components/utils/mode-toggle";

function RootLayout() {
  return (
    <div className="h-screen w-screen">
      <ModeToggle className="fixed top-3 right-3" />
      <Outlet />
    </div>
  );
}

export { RootLayout };
