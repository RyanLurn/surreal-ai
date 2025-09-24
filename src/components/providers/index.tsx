import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppSidebarProvider } from "@/components/providers/app-sidebar";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppSidebarProvider>{children}</AppSidebarProvider>
        <Toaster closeButton position="top-center" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export { Providers };
