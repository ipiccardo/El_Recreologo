import React from "react";
import "./styles.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import imageTwo from "../../assets/galeria/imageTwo.jpg";
import adultsOne from "../../assets/galeria/adultsOne.jpg";

const HomeCard = () => {
  return (
    <>
      <div className="contenedorPrincipal">
        <div className="sectionContainer">
          <section className="container">
            <h1 className="reserva">¡Hacé tu reserva!</h1>
            <div className="redesSociales">
              <ul className="list-icons">
                <li>
                  <a href="https://api.whatsapp.com/send?phone=+1123941289">
                    <i class="bi bi-whatsapp"></i>
                  </a>
                </li>
              </ul>
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
                eventos sean perfectos.
                <br /> Somos emprendedores, deportistas y dinámicos. Nos gusta
                hacer y proponer actividades novedosas, por eso, nuestro
                objetivo es hacer todo lo posible para que pases una experiencia
                inolvidable.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Carousel controls={true} indicators={true} autoPlay={true}>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={imageTwo}
            alt="First slide"
            height="700"
          />
          <Carousel.Caption>
            <h3 className="tituloCarousel">CUMPLEAÑOS INFANTILES</h3>
            <p className="textoCarousel">
              Una excelente actividad tanto para chicos como chicas mayores de 7
              años, giran, chocan, se caen y se divierten. Todos aman las
              burbujas!!! Una actividad novedosa que nunca se olvidarán, (los
              grandes también pueden jugar). Entre los juegos disponibles se
              puede elegir entre batallas, burbu fútbol, sumo, el rey de la
              colina, 2 perros para un hueso, giros, carrera de lavarropas ,
              duelos. Ah, nuestro juego estrella el BURBOL. Y cualquier idea que
              quieras proponer.
            </p>
            <Link to={"contacto"}>
              <button className="buttonOne">Consultar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={adultsOne}
            alt="Second slide"
            height="700"
          />
          <Carousel.Caption>
            <h3 className="tituloCarousel">EVENTOS ADULTOS</h3>
            <p className="textoCarousel">
              Cualquier motivo es bueno para organizar una tarde de juego con
              burbujas. Despedida de fin de año, recibida de año, egresos,
              casamientos, separaciones, cierre de año laboral, terapia de
              pareja, cierre de pretemporada, comienzo de la primavera, comienzo
              de otoño, comienzo de verano, bautismo de la bendi, reencuentros
              de primaria, de secundaria, reencuentros.se va a vivir afuera,
              volvió de vivir afuera, graduaciones, cumple o aniversario,
              halloween, llegaron los 30, los 40, los 50 (última oportunidad).
              Estrenamos casa, cuando decimos cualquier motivo, es cualquier
              motivo.
            </p>
            <Link to={"contacto"}>
              <button className="buttonOne">Consultar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="sectionContainerTres">
        <section class="container">
          <div class="row">
            <h1 class="title4-long-responsive-section izq blue font-bold">
              LA BURBU
            </h1>
            <h3>Arnés acolchado y ajustable:</h3>
            <p className="burbuTexto">
              1,5 de diámetro. Colocada te quedan los hombres bien ajustados y
              20 cms de burbu por encima de tu cabeza, para que puedas girar y
              chocar con toda seguridad.
            </p>
            <br />
            <h3>Ventana frontal:</h3>
            <p className="burbuTexto">
              Brinda una mejor visibilidad y permite el ingreso de aire al
              interior de la burbuja.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeCard;
