import Image from "next/image";
import Link from "next/link";
const HeroArea = () => {
  return (
    <section className="hero_area">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_text">
            <h1 className="heading">Hi, I am Linda. I help you to Be Seen on social media.
            </h1>
            <p className="paragraph-hero">Boost your visibility, bond with the big names, and stay ahead with real-time interactions.
Embrace the spotlight, and let every tweet pave your way to success!
            </p>
            <div className="hero_btns">
              <Link href="/" className="btn btn-primary">
              Try it Yourself!
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
