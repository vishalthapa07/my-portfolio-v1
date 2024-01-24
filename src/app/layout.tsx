"use client";

import { Quicksand } from "next/font/google";
import "./style/globals.css";
import NavigationBar from "@/components/navbar";
import Head from "next/head";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <Head>
        <div>Portfolio</div>
      </Head>
      <body>
        <div className={quicksand.className}>
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
