import { useEffect } from "react";
import { Conversation } from "@/components/chat/conversation";
import { connectDB, db } from "@/lib/db";

function App() {
  useEffect(() => {
    connectDB();
    return () => {
      db.close();
    };
  }, []);

  return (
    <div className="flex size-full flex-1 flex-col gap-y-3">
      <Conversation className="flex-1" />
    </div>
  );
}

export default App;
