import { heroAreaContent } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
const HeroArea = () => {
  return (
    <section className="hero_area">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_text">
            <h1 className="heading">
              {
                heroAreaContent.heroTitle
              }
            </h1>
            <p className="paragraph-hero">
              {
                heroAreaContent.heroPragraph
              }
            </p>
            <div className="hero_btns">
              <Link href={heroAreaContent.btnLink} className="btn btn-primary">
                {
                  heroAreaContent.btnText
                }
              </Link>
            </div>
          </div>
          <div className="hero_illustration">
            <Image src="/images/hero-illustration.png" alt="hero-shape" loading="lazy" height={400} width={550} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArea;
