import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Montserrat } from "next/font/google";

const Pop = Poppins({ subsets: ["latin"], weight: ["400"] });
const Mont = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Athena | SMIT Fest",
  description:
    "Athena is culture fest of SMIT organised by Management Team. Athena offers various programs and events for the students to participate and enjoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Mont.className}>{children}</body>
    </html>
  );
}
