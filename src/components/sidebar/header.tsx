import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <span>Surreal AI</span>
      </div>
    </SidebarHeader>
  );
}

export { AppSidebarHeader };
