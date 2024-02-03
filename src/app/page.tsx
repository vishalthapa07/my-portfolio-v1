"use client";

import Introduction from "@/components/introduction";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 bg-gradient-to-b from-light w-full ">
        <div className="w-full flex items-center justify-center h-[100vh]">
          <Introduction />
        </div>
        <div className="w-full flex items-center justify-center">
          <img src="/developer01.gif" alt="developer" />
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
}
