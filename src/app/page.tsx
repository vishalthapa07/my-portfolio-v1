"use client";

import Introduction, { ThreeDCardDemo } from "@/components/introduction";
import { TabsDemo } from "@/components/skills";

export default function Home() {
  return (
    <>
      <div className="bg-primary h-screen px-4 md:px-36 flex flex-col md:flex-row items-center justify-between gap-8 z-50">
        <div className="w-full">
          <Introduction />
        </div>
        <div className="w-full">
          <ThreeDCardDemo />
        </div>
      </div>

      <div className="px-4 -mt-24 md:-mt-16">
        <TabsDemo />
      </div>
    </>
  );
}
