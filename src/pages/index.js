import Benefits from "@/components/Benefits";
import Button from "@/components/Button";
import CTAOneliner from "@/components/CTAOneliner";
import HeroImage from "@/components/HeroImage";
import Logo from "@/components/Logo";
import Setup from "@/components/Setup";
import ValueProposition from "@/components/ValueProposition";


function Home() {
  // For Button
  const handleTryItClick = () => {
    alert("Hello Maker")
  }
  
  return (
    <div className="home">
      <Logo />
      <HeroImage />
      <ValueProposition />
      <Button title="Try it Yourself" onClick={handleTryItClick} />
      <Setup />
      <CTAOneliner text="Ready to shine on social media? Let's tweet your way to the top!" />
      <Benefits />
    </div>
  );
}

export default Home;
