import footerLogo from "../assets/image_rodape.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <img src={footerLogo} alt="logo db server" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
