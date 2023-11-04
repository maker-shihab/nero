
import ActionHeader from "../ActionHeader";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headerArea">
          <Logo />
          <Nav />
          <ActionHeader />
        </div>
      </div>
    </header>
  )
}
export default Header;