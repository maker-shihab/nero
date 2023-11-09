import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrPhone } from 'react-icons/gr';
import Logo from '../Logo';
import Nav from '../Nav';

const Header = ({ userLoggedIn }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handaleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header>
      <div className="container">
        <div className="headerArea">
          <Logo />
          <Nav userLoggedIn={userLoggedIn} isActive={isMenuActive} />
          <>
            <div className="header_right">
              <div className="phone_wrap">
                <span className="phone_whenBtn">
                  <GrPhone />
                </span>
                <Link href='tel:1800270963' className="actionHeaderPhone">
                  <span>(+66)</span> 1800270963
                </Link>
              </div>
              <button type='button' onClick={handaleMenu} className="menuHandaller">
                <FaBars />
              </button>
            </div>
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
