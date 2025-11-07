import github from "../../assets/button_github.png";
import linkedin from "../../assets/button_linkedin.png";
import email from "../../assets/button_email.png";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/josiasbarreto-dev" target="_blank">
        <img src={github} alt="Perfil de Josias no GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/josiasbarreto/" target="_blank">
        <img src={linkedin} alt="Perfil de Josias no Linkedin" />
      </a>
      <a
        href="mailto:sr.josiasbarreto@gmail.com?subject=Contato%20via%20Portfólio"
        target="_blank"
      >
        <img src={email} alt="Logo enviar email para Josias" />
      </a>
    </div>
  );
}

export default SocialLinks;
