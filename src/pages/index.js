import Benefits from '@/components/Benefits';
import Button from '@/components/Button';
import CTAOneliner from '@/components/CTAOneliner';
import HeroArea from '@/components/HeroArea';
import Layout from '@/components/Layout';
import Pricing from '@/components/Pricing';
import { SectionLogo } from '@/components/SectionLogo';
import Setup from '@/components/Setup';
import ValueProposition from '@/components/ValueProposition';

export default function Home() {
  // For Button
  const handleTryItClick = () => {
    alert("Hello Maker");
  }
  return (
    <Layout>
      <div className="home">
        <HeroArea />
        <SectionLogo/>

        
        <ValueProposition />
        <Button title="Try it Yourself" onClick={handleTryItClick} />
        <Setup />
        <Pricing />
        <CTAOneliner text="Ready to shine on social media? Let's tweet your way to the top!" />
        <Benefits />
      </div>
    </Layout>
  )
}
