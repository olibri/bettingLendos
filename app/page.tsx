import Image from "next/image";
import Header from "./components/sections/Header";
import TopSection from "./components/sections/TopSection";
import HowItWorks from "./components/sections/HowItWorks";
import PickTimeframe from "./components/sections/PickTimeframe";
import EventType from "./components/sections/EventType";

export default function Home() {
  return (
    <div className="bg-[#010101]">
      <TopSection />
      <main className="custom-container">
        <HowItWorks />
        <PickTimeframe />
        <EventType />
      </main>
    </div>
  );
}
