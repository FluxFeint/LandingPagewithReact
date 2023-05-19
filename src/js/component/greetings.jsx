import React from "react";

const Greetings = (props) => {
  const { language, children } = props;

  let greeting = "";

  switch (language) {
    //mensaje de cada lenguaje que pide Óscar
    //componente sin usar en el resultado final
    case "de":
      greeting = `Hallo ${children}`;
      break;
    case "en":
      greeting = `Hello ${children}`;
      break;
    case "es":
      greeting = `Hola ${children}`;
      break;
    case "fr":
      greeting = `Bonjour ${children}`;
      break;
      //default por si el lenguaje no es ninguno de ellos
    default:
      greeting = `Hello ${children}`;
      break;
  }

  return <div><p>{greeting}</p></div>;
};

export default Greetings;