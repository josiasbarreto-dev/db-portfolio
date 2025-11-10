import React from "react";

import crudPessoaImg from "../assets/image_crud_pessoa.png";
import crudNinjasImg from "../assets/image_crud_batalha_ninjas.png";
import crudVotingImg from "../assets/image_challengue_voting.png";
import crudSmartSensorImg from "../assets/api-smart-sensor.png";
import ProjectCard from "../components/ProjectsGrid/ProjectsCard";

interface Project {
  image: string;
  title: string;
  techs: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      image: crudPessoaImg,
      title: "CRUD Pessoa",
      techs: "SPRING BOOT, JAVA, MYSQL, OPEN API",
      description:
        "Este projeto é um desafio técnico que implementa uma API REST utilizando Java com Spring Boot, seguindo os requisitos propostos para um CRUD completo das entidades Pessoa e Endereço.",
      link: "https://github.com/josiasbarreto-dev/crud-pessoa-refatorado",
    },
    {
      image: crudNinjasImg,
      title: "Desafio Naruto",
      techs: "SPRING BOOT, JAVA, MYSQL, OPEN API",
      description:
        "CRUD completo para gerenciar uma 'Batalha de Ninjas' inspirada no universo Naruto. Usuários podem cadastrar novos ninjas, definir habilidades e participar de combates dinâmicos.",
      link: "https://github.com/josiasbarreto-dev/crud-naruto-I",
    },
    {
      image: crudVotingImg,
      title: "Desafio Votação",
      techs: "SPRING BOOT, JAVA, MYSQL, OPEN API",
      description:
        "API RESTful para gerenciar e facilitar o processo de votação em pautas, com sessões, votos únicos e contabilização de resultados.",
      link: "https://github.com/josiasbarreto-dev/api-voting-challenge",
    },
    {
      image: crudSmartSensorImg,
      title: "API Smart Sensor",
      techs: "SPRING BOOT, JAVA, MONGO DB, OPEN API",
      description:
        "API Smart Sensor é uma API RESTful em Java com Spring Boot para ingestão e gestão de leituras de sensores IoT. Oferece endpoints para receber dados de sensores, consultar leituras no MongoDB, deletar leituras por id e listar todas as leituras. Preparada para validação básica, persistência em MongoDB e execução em Docker.",
      link: "https://github.com/josiasbarreto-dev/api-smart-sensor",
    },
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
