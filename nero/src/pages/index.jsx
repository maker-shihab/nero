import Benefits from '@/components/benefits/Benefits';
import Blog from '@/components/blog/Blog';
import ContentSection from '@/components/ContentSection';
import CTA from '@/components/CTA';
import HeroArea from '@/components/HeroArea';
import Layout from '@/components/Layout';
import Pricing from '@/components/priceTable/Pricing';
import SectionLogo from '@/components/SectionLogo';
import Setup from '@/components/setup/Setup';
import { cta1Data } from '@/data/data';

export default function Home() {
  return (
    <Layout>
      <>
        <HeroArea />
        <SectionLogo/>
        <Setup />
        <CTA data={cta1Data} />
        <Benefits/>
        <ContentSection />
        <Pricing />
        <Blog />
      </>
    </Layout>
  )
}
