import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vishal Thapa portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-b from-light fixed h-[100vh] w-full">
      <head className={quicksand.className}>
        <NavigationBar />
      </head>
      <body className={quicksand.className}>{children}</body>
    </div>
  );
}
