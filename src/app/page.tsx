"use client";

import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-b from-light fixed h-[100vh] w-full">
      <div className="w-full flex items-center justify-center">
        <Introduction />
      </div>
      <div className="w-full flex items-center justify-center">
        <img src="/developer01.gif" alt="developer" />
      </div>
    </div>
  );
}
