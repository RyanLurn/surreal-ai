import { AppSidebarHeader } from "@/components/sidebar/header";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

function AppSidebar({ className }: { className?: string }) {
  return (
    <Sidebar className={className} variant="inset">
      <AppSidebarHeader />
      <SidebarContent>SidebarContent</SidebarContent>
    </Sidebar>
  );
}

export { AppSidebar };
