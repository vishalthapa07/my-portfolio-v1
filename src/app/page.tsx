"use client";

import { ContactMe } from "@/components/contact-me";
import Introduction, { ThreeDCardDemo } from "@/components/introduction";
import { TabsDemo } from "@/components/skills";
import NavigationBar from "@/components/navbar";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={quicksand.className}>
      <NavigationBar />
      <div className="bg-primary h-screen px-4 lg:px-36 flex flex-col lg:flex-row items-center justify-between gap-8 z-50">
        <div className="w-full">
          <Introduction />
        </div>
        <div className="w-full">
          <ThreeDCardDemo />
        </div>
      </div>

      <div id="work" className="px-4 pt-48 lg:pt-20">
        <TabsDemo />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}
