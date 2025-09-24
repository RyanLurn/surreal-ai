import { Outlet } from "react-router";
import { AppSidebar } from "@/components/sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/utils/mode-toggle";

function RootLayout() {
  return (
    <>
      <AppSidebar />
      <SidebarInset className="h-[calc(100%-1rem)]">
        <SidebarTrigger className="absolute top-2 left-2 z-50" />
        <Outlet />
        <ModeToggle className="absolute top-2 right-2 z-50" />
      </SidebarInset>
    </>
  );
}

export { RootLayout };
