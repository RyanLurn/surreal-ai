import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <Toaster closeButton position="top-center" richColors />
    </ThemeProvider>
  );
}

export { Providers };
