import HeroIntro from "../components/HeroIntro";
import About from "../components/AboutSection/About";
import SkillsCard from "../components/AboutSection/SkillsCard";

function Home() {
  return (
    <div className="App">
      <main className="main-content">
        <HeroIntro />
        <About />
        <SkillsCard />
      </main>
    </div>
  );
}

export default Home;
