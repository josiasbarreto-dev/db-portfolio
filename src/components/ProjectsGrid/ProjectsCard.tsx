import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  techs: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  techs,
  description,
  link,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} width={306} height={183} />
      <h2>{title}</h2>
      <h3>
        <strong>{techs}</strong>
      </h3>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="button_link"
      >
        <button className="button">Github</button>
      </a>
    </div>
  );
};

export default ProjectCard;
