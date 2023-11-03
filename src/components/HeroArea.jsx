import Image from "next/image";
import Link from "next/link";
import styles from '../styles/HeroArea.module.css';
const HeroArea = () => {
  return (
    <section className="hero_area">
      <div className="hero_container">
        <div className="hero_text">
          <h1>Drive Customers Through Digital Channels.
          </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
          </p>
          <div className={styles.hero_btns}>
            <Link href="/" className="btn btn_primary">
              Clone this template
            </Link>
            <Link href="/" className="btn_primary_nobg">
              See our Process
            </Link>
          </div>
        </div>
        <div className="hero_illustration">
          <Image src="/images/hero-illustration.png" alt="hero-shape" loading="lazy" objectFit="contain" height={400} width={550} />
        </div>
      </div>
    </section>
  );
}

export default HeroArea;
