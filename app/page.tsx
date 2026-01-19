import Image from "next/image";
import Header from "./components/sections/Header";
import TopSection from "./components/sections/TopSection";
import HowItWorks from "./components/sections/HowItWorks";
import PickTimeframe from "./components/sections/PickTimeframe";
import EventType from "./components/sections/EventType";
import ResultSection from "./components/sections/ResultSection";
import WhyItMatters from "./components/sections/WhyItMatters";
import StartPredicting from "./components/sections/StartPredicting";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#010101]">
      <TopSection />
      <main className="custom-container">
        <HowItWorks />
        <PickTimeframe />
        <EventType />
        <ResultSection />
        <WhyItMatters />
        <StartPredicting />
      </main>
      <Footer />
    </div>
  );
}
