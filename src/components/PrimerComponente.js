import React from "react";

export const PrimerComponente = () => {
  let nombre = "Franco Ortega";
  let web = "https://portafolio-jobs.netlify.app/";

  let habilidad = [
    "Desarrollador Front-end",
    "Seo",
    "Maquetación",
    "Resposive Desing",
    "Desing Frontend",
  ];
  /* let skill = [
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
  ]; */

  return (
    <div>
      <h3>{nombre}</h3>

      <a href="https://portafolio-jobs.netlify.app/" target="_blank">
        Portafolio de trabajo
      </a>

      <ul>
        {habilidad.map((habilidad, indice) => {
          return <li key={indice}>{habilidad}</li>;
        })}
      </ul>
      <p>Work Tools</p>
      <ul>
        <box-icon type="logo" name="html5" size="md"></box-icon>
        <box-icon name="css3" type="logo" size="md"></box-icon>
        <box-icon type="logo" name="javascript" size="md"></box-icon>
        <box-icon type="logo" name="react" size="md"></box-icon>
        <box-icon name="nodejs" type="logo" size="md"></box-icon> <br></br>
        <box-icon name="heroku" type="logo" size="md"></box-icon>
        <box-icon name="netlify" type="logo" size="md"></box-icon>
        <box-icon name="mongodb" type="logo" size="md"></box-icon>
        <box-icon name="sass" type="logo" size="md"></box-icon>
        <br></br>
        <box-icon name="less" type="logo" size="md"></box-icon>
        <box-icon type="logo" name="bootstrap" size="md"></box-icon>
        <box-icon name="git" type="logo" size="md"></box-icon>
        <box-icon name="github" type="logo" size="md"></box-icon>
        <box-icon name="visual-studio" type="logo" size="md"></box-icon>
      </ul>
    </div>
  );
};
