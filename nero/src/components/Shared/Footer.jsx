import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { BsDiscord, BsLinkedin, BsTwitter } from 'react-icons/bs';
import styles from '../../styles/Footer.module.css';
export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_left}>
            <div className="footer_logo">
              <Link href='/'>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={50}
                  height={60} 
                  loading="lazy" 
                />
              </Link>
            </div>
            <p className="paragraph-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
            <div className={styles.contact}>
              <Link href='/'>
                <Image src="/images/envolep-bel.svg" alt='icon' width={20} height={20} loading='lazy' />
                <span>contact@lina.co</span>
              </Link>
              <Link href='/'>
                <Image src="/images/live-chart.svg" alt='icon' width={25} height={20} loading='lazy' />
                <span>Livechat</span>
              </Link>
            </div>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_widget}>
              <h3 className="widget_title">About Us</h3>
              <ul className="footer_menu">
                <li>
                  <Link href='/'>Company</Link>
                </li>
                <li>
                  <Link href='/'>Leadership</Link>
                </li>
                <li>
                  <Link href='/'>Diversity</Link>
                </li>
                <li>
                  <Link href='/'>FAQ</Link>
                </li>
                <li>
                  <Link href='/'>News</Link>
                </li>
              </ul>
            </div><div className={styles.footer_widget}>
              <h3 className="widget_title">Services</h3>
              <ul className="footer_menu">
                <li>
                  <Link href='/'>Interface Design</Link>
                </li>
                <li>
                  <Link href='/'>Development</Link>
                </li>
                <li>
                  <Link href='/'>Engineering</Link>
                </li>
                <li>
                  <Link href='/'>UX Design</Link>
                </li>
                <li>
                  <Link href='/'>Prototyping</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_widget}>
              <h3 className="widget_title">Press</h3>
              <ul className="footer_menu">
                <li>
                  <Link href='/'>FAQ</Link>
                </li>
                <li>
                  <Link href='/'>About Us</Link>
                </li>
                <li>
                  <Link href='/'>News</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className="footer_cp">
            <p>© Copyright 2023 <Link href="/">example.com</Link></p>
            <div className="footer_socail">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
