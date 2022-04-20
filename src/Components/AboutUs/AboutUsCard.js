import React from "react";
import "./AboutUsCard.css";
import opImg from "../../assets/Opiniones.png";

const AboutUsCard = () => {
  return (
    <div className="aboutUsCardContainer">
      <h2>¿Quienes somos?</h2>
      <div className="paragraph">
        <p className="p">
          Somos una empresa joven dedicada a la creación y animación de eventos.
          Nuestro equipo cuenta con la experiencia para que tus eventos sean
          perfectos. Somos emprendedores, deportistas y dinámicos. Nos gusta
          hacer y proponer actividades novedosas, por eso, nuestro objetivo es
          hacer todo lo posible para que pases una experiencia inolvidable.
        </p>
      </div>
      <hr />
      <h2>Preguntas Frecuentes</h2>
      <div className="preguntasContainer">
        <h3>Pregunta A</h3>
        <p className="p">Aca va la pregunta a</p>
        <h3>Pregunta b</h3>
        <p className="p">Aca va la pregunta a</p>
        <h3>Pregunta c</h3>
        <p className="p">Aca va la pregunta a</p>
        <h3>Pregunta d</h3>
        <p className="p">Aca va la pregunta a</p>
      </div>
      <hr />

      <h2>Opiniones</h2>
      <div className="opinionesContainer">
        <div className="opinionUsuario">
          <div className="logoUsuario">
            <img src={opImg} alt="opiniones Images"></img>
          </div>
          <p className="comentarioUsuario p">
            Excelente lugar, muy buenas actividades para disfrutar, y la
            predisposición de los dueños es excelente <br />
            <span>Usuario</span>
          </p>
        </div>
        <div className="opinionUsuarioB">
          <div className="logoUsuario">
            <img src={opImg} alt="opiniones Images"></img>
          </div>
          <p className="comentarioUsuario p">
            Excelente lugar, muy buenas actividades para disfrutar, y la
            predisposición de los dueños es excelente <br />
            <span>Usuario</span>
          </p>
        </div>
        <div className="opinionUsuarioC">
          <div className="logoUsuario">
            <img src={opImg} alt="opiniones Images"></img>
          </div>
          <p className="comentarioUsuario p">
            Excelente lugar, muy buenas actividades para disfrutar, y la
            predisposición de los dueños es excelente <br />
            <span>Usuario</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
