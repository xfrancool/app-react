import React from "react";

export const PrimerComponente = () => {
  let nombre = "Franco Ortega";
  let web = "https://portafolio-jobs.netlify.app/";

  let habilidad = ["Programador web", "Seo", "Resposive Desing", "Maquetación"];

  return (
    <div>
      <h3>{nombre}</h3>
      <p>{web}</p>
      <ul>
        {habilidad.map((habilidad, indice) => {
          return <li key={indice}>{habilidad}</li>;
        })}
      </ul>
    </div>
  );
};
