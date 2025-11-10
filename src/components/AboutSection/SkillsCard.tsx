const skills = {
  Backend: [
    { skill: "SPRING BOOT", level: 5 },
    { skill: "JAVA", level: 4 },
    { skill: "POSTGREE/MYSQL", level: 4 },
    { skill: "FLYWAY", level: 4 },
    { skill: "DOCKER", level: 4 },
    { skill: "SWAGGER - OPEN API", level: 5 },
    { skill: "POSTMAN", level: 5 },
    { skill: "GITHUB", level: 4 },
    { skill: "JUNIT/MOCKITO", level: 4 },
    { skill: "SYSTEM DESIGN", level: 4 },
  ],
  Frontend: [
    { skill: "HTML5", level: 5 },
    { skill: "CSS", level: 4 },
    { skill: "JAVASCRIPT", level: 3 },
    { skill: "TYPESCRIPT", level: 2 },
    { skill: "REACT", level: 3 },
  ],
};
function SkillsCard() {
  return (
    <div className="skills-card">
      {/* Título principal da seção */}
      <h2 className="main-title">
        <strong>Habilidades</strong>
      </h2>

      {/* Faz um loop em cada categoria (Backend, Frontend) */}
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          {/* Nome da categoria */}
          <div className="category-title">{category}</div>

          {/* Faz um loop em cada habilidade dentro da categoria */}
          {items.map(({ skill, level }) => (
            <div className="skill-item" key={skill}>
              {/* Nome da habilidade */}
              <div className="skill-name">{skill}</div>

              {/* Barra de progresso indicando o nível (0 a 5) */}
              <progress className="progress-bar" value={level} max={5} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SkillsCard;
