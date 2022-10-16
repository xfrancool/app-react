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

      <a href="https://portafolio-jobs.netlify.app/">Portafolio de trabajo</a>

      <ul>
        {habilidad.map((habilidad, indice) => {
          return <li key={indice}>{habilidad}</li>;
        })}
      </ul>
      <p>Work Tools</p>
      <ul>
        <box-icon type="logo" name="html5"></box-icon>
        <box-icon name="css3" type="logo"></box-icon>
        <box-icon type="logo" name="javascript"></box-icon>
        <box-icon type="logo" name="react"></box-icon>
        <box-icon name="nodejs" type="logo"></box-icon> <br></br>
        <box-icon name="heroku" type="logo"></box-icon>
        <box-icon name="netlify" type="logo"></box-icon>
        <box-icon name="mongodb" type="logo"></box-icon>
        <box-icon name="sass" type="logo"></box-icon>
        <br></br>
        <box-icon name="less" type="logo"></box-icon>
        <box-icon type="logo" name="bootstrap"></box-icon>
        <box-icon name="git" type="logo"></box-icon>
        <box-icon name="github" type="logo"></box-icon>
        <box-icon name="visual-studio" type="logo"></box-icon>
      </ul>
    </div>
  );
};
