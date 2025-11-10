import imgProfile from "../assets/profile.webp";

function HeroIntro() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-intro">
          <h2 className="hero-greeting">Olá, meu nome é</h2>
          <h1 className="hero-name">Josias Barreto</h1>
          <p className="hero-description">
            Sou trainee de Desenvolvimento <br /> de Sofware na DBServer.
          </p>
        </div>
        <div className="hero-image">
          <img src={imgProfile} alt="Foto de Josias Barreto" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default HeroIntro;
