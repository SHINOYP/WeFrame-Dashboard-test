'use client'
import "./globals.css";
import React, { useState,useEffect } from "react";
// import { Inter } from "next/font/google";
import Navbar from "./Components/Layout/navbar";
import Sidebar from "./Components/Layout/sidebar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "WeFrame",
//   description: "Generated by Shino",
// };

export default function RootLayout({ children }) {
  const [showHamBtn, setShowHamBtn] = useState(true);

  //code for responsive nav open & close state
  useEffect(() => {
    const isMobile = window.innerWidth < 1458;
    setShowHamBtn(!isMobile);
    const handleResize = () => {
      const isMobile = window.innerWidth < 1458;
      setShowHamBtn(!isMobile);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  
  return (
    <html lang="en">
    <body className="relative flex bg-secondary">
      <Sidebar  showHamBtn={showHamBtn}  setShowHamBtn={setShowHamBtn}/>
      <div className="w-full h-screen overflow-hidden md:overflow-y-auto">
        <section className="w-full">
            <Navbar showHamBtn={showHamBtn}   setShowHamBtn={setShowHamBtn}/>
          {children}
        </section>
      </div>
    </body>
  </html>
  );
}
