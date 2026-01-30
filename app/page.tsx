import Image from "next/image";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
   <div className="h-full max-w-7xl flex flex-col justify-between items-center mx-auto">
    <Hero />
    <FeaturesSection />
   </div>
  );
}
