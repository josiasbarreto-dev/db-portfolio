import Logo from "./Logo";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />
        <NavBar />
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;
