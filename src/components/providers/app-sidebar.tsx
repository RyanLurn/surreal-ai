import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME } from "@/lib/constants";

function AppSidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    async function loadCookie() {
      try {
        const cookie = await cookieStore.get(SIDEBAR_COOKIE_NAME);
        if (cookie) {
          setOpen(cookie.value === "true");
        } else {
          setOpen(true);
        }
      } catch (err) {
        console.error("Error reading cookie", err);
        setOpen(true);
      }
    }
    loadCookie();
  }, []);

  async function handleOpenChange(open: boolean) {
    setOpen(open);
    try {
      await cookieStore.set({
        expires: Date.now() + SIDEBAR_COOKIE_MAX_AGE,
        name: SIDEBAR_COOKIE_NAME,
        value: open.toString(),
      });
    } catch (error) {
      console.error(`Error setting ${SIDEBAR_COOKIE_NAME} cookie`, error);
    }
  }

  if (open === null) return null;

  return (
    <SidebarProvider
      className="h-screen"
      onOpenChange={handleOpenChange}
      open={open}
    >
      {children}
    </SidebarProvider>
  );
}

export { AppSidebarProvider };
