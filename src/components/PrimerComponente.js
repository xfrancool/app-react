import React from "react";

export const PrimerComponente = () => {
  let nombre = "Franco Ortega";
  let web = "https://portafolio-jobs.netlify.app/";

  let habilidad = [
    "Desarrollador Web",
    "Seo",
    "Resposive Desing",
    "Maquetación",
    "Desing Frontend",
  ];
  let skill = [
    "HTML5",
    "CSS",
    "SASS",
    "Boostrap",
    "Tailwind",
    "JavaScript",
    "React",
    "NodeJs",
    "MongoDB",
    "Heroku",
    "Github",
    "Visual Estudio",
  ];

  return (
    <div>
      <h3>{nombre}</h3>
      <a>{web}</a>
      <ul>
        {habilidad.map((habilidad, indice) => {
          return <li key={indice}>{habilidad}</li>;
        })}
      </ul>
      <p>Work Tools</p>
      <ul>
        {skill.map((skill, indice) => {
          return <li key={indice}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};
