
import ActionHeader from "../ActionHeader";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
      <ActionHeader/>
    </div>
  )
}
export default Header;