import Image from "next/image";
import Header from "./components/sections/Header";
import TopSection from "./components/sections/TopSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#010101]">
      <TopSection />
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        
      </main> */}
    </div>
  );
}
