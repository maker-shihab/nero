import Image from "next/image";
import Link from "next/link";
const HeroArea = () => {
  return (
    <section className="hero_area">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_text">
            <h1 className="heading">Drive Customers Through Digital Channels.
            </h1>
            <p className="paragraph-hero">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
            <div className="hero_btns">
              <Link href="/" className="btn btn-primary">
                Clone this template
              </Link>
              <Link href="/" className="btn_primary_nobg">
                See our Process
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
