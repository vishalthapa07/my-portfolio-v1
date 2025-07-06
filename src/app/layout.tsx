import type { Metadata } from "next";

import "./style/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vishal Thapa",
  openGraph: {
    title: "Portfolio",
    description: "Vishal Thapa",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal Thapa",
      },
    ],
  },
  icons: {
    icon: "/me.jpg",
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
