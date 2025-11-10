import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-link">
        Sobre
      </Link>
      <a href="/src/assets/pdf/resume.pdf" className="nav-link" target="_blank">
        Currículo
      </a>
      <Link to="/projetos" className="nav-link">
        Projetos
      </Link>
    </nav>
  );
}

export default NavBar;
