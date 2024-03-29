"use client";

import { ContactMe } from "@/components/contact-me";
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

      <div id="work" className="px-4">
        <TabsDemo />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </>
  );
}
