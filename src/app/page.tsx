import HeroSection from "@/components/HeroSection";
import ChooseUs from "@/components/ChooseUs";
import Testimonial from "@/components/Testimonial";
import Harmony from "@/components/Harmony";
import CardHover from "@/components/CardHover";
import Author from "@/components/Authors";
export default function home() {
  return (
    <>
      {" "}
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <ChooseUs />
        <Testimonial />
        <Harmony />
        <CardHover />
        <Author />
      </main>
    </>
  );
}
