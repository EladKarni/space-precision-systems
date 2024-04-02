import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import StarOverlay from "@/components/StarOverlay/StarOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Precision Systems",
  description:
    "Space Precision delivers the perfect space mechanism solution no matter the mass, volume, functional, or environmental constraints of an application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="spstheme" className="overflow-x-hidden h-full">
      <body
        className={clsx(
          inter.className,
          "relative flex flex-col h-screen justify-between pt-[128px]"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
