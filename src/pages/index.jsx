import Benefits from '@/components/Benefits';
import Blog from '@/components/Blog';
import ContentSection from '@/components/ContentSection';
import HeroArea from '@/components/HeroArea';
import Layout from '@/components/Layout';
import Pricing from '@/components/Pricing';
import SectionLogo from '@/components/SectionLogo';
import Services from '@/components/Services';

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
        <Services/>
        <ContentSection />
        <Blog />
        <Pricing />
        <Benefits />
      </div>
    </Layout>
  )
}
