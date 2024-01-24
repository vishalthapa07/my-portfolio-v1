"use client";

import { Quicksand } from "next/font/google";
import "./style/globals.css";
import NavigationBar from "@/components/navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-b from-light fixed h-[100vh] w-full">
      <div className={quicksand.className}>
        <NavigationBar />
      </div>
      <div className={quicksand.className}>{children}</div>
    </div>
  );
}
