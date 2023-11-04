import ActionHeader from '../ActionHeader';
import Logo from '../Logo';
import Nav from '../Nav';

const Header = ({ userLoggedIn }) => {
  return (
    <header>
      <div className="container">
        <div className="headerArea">
          <Logo />
          <Nav userLoggedIn={userLoggedIn} />
          <ActionHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
