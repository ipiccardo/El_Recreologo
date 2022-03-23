import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const HomeCard = () => {
  return (
    <>
      <div className="contenedorPrincipal">
        <div className="sectionContainer">
          <section className="container">
            <div className="row">
              <div className="contenedorExterior">
                <div className="contenedorInterior" id="boton">
                  <Link to={"contacto"}>
                    <button className="buttonOne">Consultar</button>
                  </Link>
                </div>
              </div>
              <h1 class="title4-long-responsive-section izq blue font-bold">
                ¿Tenés un evento para realizar?
              </h1>
              <h3>¡Consultanos y en breve te respondemos! </h3>
            </div>
          </section>
        </div>
        <div className="sectionContainerDos">
          <section class="container">
            <div class="row">
              <h1 class="title4-long-responsive-section izq blue font-bold">
                ¿Quiénes somos?
              </h1>
              <p>
                Somos una empresa joven dedicada a la creación y animación de
                eventos. Nuestro equipo cuenta con la experiencia para que tus
                eventos sean perfectos. Somos emprendedores, deportistas y
                dinámicos. Nos gusta hacer y proponer actividades novedosas, por
                eso, nuestro objetivo es hacer todo lo posible para que pases
                una experiencia inolvidable.
              </p>
            </div>
          </section>
        </div>
        <div className="sectionContainerTres">
          <section class="container">
            <div class="row">
              <h1 class="title4-long-responsive-section izq blue font-bold">
                ¿Qué hacemos?
              </h1>
              <p>
                Eventos niños: Una excelente actividad tanto para chicos como
                chicas mayores de 7 años, giran, chocan, se caen y se divierten.
                Todos aman las burbujas!!! Una actividad novedosa que nunca se
                olvidarán, (los grandes también pueden jugar). Eventos adultos:
                Cualquier motivo es bueno para organizar una tarde de juego con
                burbujas. Despedida de fin de año, recibida de año, egresos,
                casamientos, separaciones, cierre de año laboral, terapia de
                pareja, cierre de pretemporada, comienzo de la primavera,
                comienzo de otoño, comienzo de verano, bautismo de la bendi,
                reencuentros de primaria, de secundaria, reencuentros.se va a
                vivir afuera, volvió de vivir afuera, graduaciones, cumple o
                aniversario, halloween, llegaron los 30, los 40, los 50 (última
                oportunidad). Estrenamos casa, cuando decimos cualquier motivo,
                es cualquier motivo.
              </p>
            </div>
          </section>
        </div>
        <div className="sectionContainerCuatro">
          <section class="container">
            <div class="row">
              <h1 class="title4-long-responsive-section izq blue font-bold">
                Detalles de la actividad
              </h1>
              <p>
                Entre los juegos disponibles se puede elegir entre batallas,
                burbu fútbol, sumo, el rey de la colina, 2 perros para un hueso,
                giros, carrera de lavarropas , duelos. Ah, nuestro juego
                estrella el BURBOL. Y cualquier idea que quieras proponer.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
