import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./compundent/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "auto Caption Generator",
  description: "auto-caption generation with our Next.js-based solution powered by AWS. Effortlessly upload your videos, and watch as our system transcribes them in real-time, providing accurate captions for accessibility and convenience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-purple-600 to-blue-700 min-h-screen text-white" }>
      <main className=" max-w-[1000px] mx-auto">
        <Navbar/>
        {children}
        </main>
        </body>
    </html>
  );
}
