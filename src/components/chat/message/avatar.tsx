import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function MessageAvatar({ role }: { role: "user" | "assistant" }) {
  return (
    <Avatar className="size-9 ring ring-border">
      {/* TODO: Support avatar's image */}
      <AvatarFallback>{role === "user" ? "You" : "AI"}</AvatarFallback>
    </Avatar>
  );
}

export { MessageAvatar };
