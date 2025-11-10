import logo from "../../assets/logo_db_topo.png";

function Logo() {
  return (
    <a href="https://db.tec.br/" className="site-logo" target="_blank">
      <img src={logo} alt="logomarca DB Server" />
    </a>
  );
}

export default Logo;
