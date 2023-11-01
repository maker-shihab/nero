
import styles from '../../styles/Header.module.css';
import ActionHeader from "../ActionHeader";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
      <ActionHeader/>
    </div>
  )
}
export default Header;