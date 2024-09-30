import type { Metadata } from "next";

import { Poppins, Montserrat } from "next/font/google";

const Pop = Poppins({ subsets: ["latin"], weight: ["400"] });
const Mont = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Athena Tickets",
  description:
    "Grab your audience ticket for Atheena Musical Fest SMIT now..",
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
