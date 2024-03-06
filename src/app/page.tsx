"use client";

import Introduction, { ThreeDCardDemo } from "@/components/introduction";

export default function Home() {
  return (
    <>
      <div className="bg-primary h-screen px-36 flex items-center justify-between gap-8">
        <div className="w-full">
          <Introduction />
        </div>
        <div className="w-full">
          <ThreeDCardDemo />
        </div>
      </div>
    </>
  );
}
