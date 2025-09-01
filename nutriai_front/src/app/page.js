"use client"
import Navbar from "@/components/Navbar";
import Scan from "./scan/page";

export default function Home() {
  return (
   <div className="p-2 bg-[blue] min-h-screen">
    <Navbar/>
    <Scan/>
   </div>
  );
}
