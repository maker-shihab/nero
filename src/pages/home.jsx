import Benefits from "@/components/Benefits";
import Button from "@/components/Button";
import CTAOneliner from "@/components/CTAOneliner";
import HeroImage from "@/components/HeroImage";
import Pricing from "@/components/Pricing";
import Setup from "@/components/Setup";
import ValueProposition from "@/components/ValueProposition";

export default function Home() {
  // For Button
  const handleTryItClick = () => {
    alert("Hello Maker");
  }

  return (
    <div className="home">
      <HeroImage />
      <ValueProposition />
      <Button title="Try it Yourself" onClick={handleTryItClick} />
      <Setup />
      <Pricing />
      <CTAOneliner text="Ready to shine on social media? Let's tweet your way to the top!" />
      <Benefits />
    </div>
  );
}
