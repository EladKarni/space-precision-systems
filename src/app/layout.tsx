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
    "Space Precision Systems is a company that specializes in the design and manufacturing of precision mechanical parts for space applications. We are a team of engineers and designers who are passionate about space exploration and are dedicated to providing the highest quality products to our customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="spstheme" className="overflow-x-hidden">
      <body className={clsx(inter.className, "relative h-screen")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
