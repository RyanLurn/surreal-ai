import { useEffect } from "react";
import { connectDB, db } from "@/lib/db";

function App() {
  useEffect(() => {
    connectDB();
    return () => {
      db.close();
    };
  }, []);

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        React Fastlane
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A React Vite SPA template for quick prototyping.
      </p>
    </div>
  );
}

export default App;
