import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsDiscord, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { TbBrandWebflow } from 'react-icons/tb';
import styles from '../../styles/Footer.module.css';
import { Footer2 } from "./Footer2";
const Footer = () => {
  return (
    <>
    <Footer2 />
    <footer className={styles.footer_section}>
      <div className={styles.footer_container}>
        <div className={styles.image_footer_shape}>
          <Image src='/images/footer-icon.png' alt="footer_icon" width={100} height={110} loading="lazy" />
        </div>
        <div className={styles.footer_content}>
          <div className={styles.footer_wrapper}>
            <h2 className={styles.footer_title}>Discover Premium <br /> <span className={styles.footer_grad_title}>Webflow</span> Products</h2>
            <p>Flowbase is the largest Webflow resource site for Webflow experts and beginners. Premium templates, components, guides, apps + more.</p>
            <div className={styles.footer_socail}>
              <ul>
                <li>
                  <Link href='/'>
                    <BsTwitter />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <BsDiscord />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <BsLinkedin />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <BiLogoFacebook />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <TbBrandWebflow />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <ul>
              <li>
                <p className={styles.footer_copywrite}>© 2023 Flowbase</p>
              </li>
              <li>
                <Link href='/'>• Flowbase</Link>
              </li>
              <li>
                <Link href='/'>• Components</Link>
              </li>
              <li>
                <Link href='/'>• Templates</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;