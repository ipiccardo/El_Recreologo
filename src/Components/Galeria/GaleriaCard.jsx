import React from "react";
import "./galeriaCard.css";
import { Button } from "react-bootstrap";
import imageTwo from "../../assets/galeria/imageTwo.jpg";
import imageThree from "../../assets/galeria/imageThree.jpg";
import imageFour from "../../assets/galeria/imageFour.jpg";
import videoOne from "../../assets/galeria/videoOne.mp4";
import videoTwo from "../../assets/galeria/videoTwo.mp4";
import adultsOne from "../../assets/galeria/adultsOne.jpg";
import adultsTwo from "../../assets/galeria/adultsTwo.jpg";
import adultsThree from "../../assets/galeria/adultsThree.jpg";
import { Link } from "react-router-dom";

function GaleriaCard() {
  return (
    <>
      <section className="galeriaSection">
        <h2 className="galeriaTItle">Nuestros Eventos:</h2>
        <div className="eventaASection">
          <div className="galeriaContainer"></div>
          <div className="eventoAContainer">
            <div className="columnaAFlex">
              <div>
                <h2 className="columnaAflexh2">Cumpleaños Infantiles</h2>
                <p className="paragraphColumnaA">
                  Una excelente actividad tanto para chicos como chicas mayores
                  de 7 años, giran, chocan, se caen y se divierten. Todos aman
                  las burbujas!!! Una actividad novedosa que nunca se olvidarán,
                  (los grandes también pueden jugar). Entre los juegos
                  disponibles se puede elegir entre batallas, burbu fútbol,
                  sumo, el rey de la colina, 2 perros para un hueso, giros,
                  carrera de lavarropas , duelos. Ah, nuestro juego estrella el
                  BURBOL. Y cualquier idea que quieras proponer.
                </p>
              </div>
              <div>
                <div className="fotoColumnaA">
                  <video
                    height="500"
                    width="400"
                    loop
                    autoPlay
                    muted
                    src={videoOne}
                    type="video/mp4"
                    alt="First slide"
                  ></video>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="columnaB">
              <div className="fotoColumnaB">
                <img
                  className="d-block w-100 widthHeightResponsive marginCenter"
                  src={imageTwo}
                  alt="First slide"
                  height="450"
                />
              </div>
              <div className="fotoColumnaB">
                <img
                  className="d-block w-100 widthHeightResponsive marginCenter"
                  src={imageThree}
                  alt="First slide"
                  height="450"
                />
              </div>
              <div>
                <img
                  className="d-block w-100 widthHeightResponsive marginCenter"
                  src={imageFour}
                  alt="First slide"
                  height="450"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="consultanos">
          <h3>¿Tenés un evento para realizar?</h3>
          <p>Consultanos y te respondemos!</p>
          <Link to={"contacto"}>
            <Button variant="secondary" className="button">
              Consultar
            </Button>
          </Link>
        </div>
        <div className="eventaASection">
          <div className="galeriaContainer"></div>
          <div className="eventoAContainer">
            <div className="columnaAFlex">
              <div>
                <h2 className="enventosAdultosTitle columnaAflexh2">
                  Eventos Adultos
                </h2>
                <p className="paragraphColumnaA">
                  Cualquier motivo es bueno para organizar una tarde de juego
                  con burbujas. Despedida de fin de año, recibida de año,
                  egresos, casamientos, separaciones, cierre de año laboral,
                  terapia de pareja, cierre de pretemporada, comienzo de la
                  primavera, comienzo de otoño, comienzo de verano, bautismo de
                  la bendi, reencuentros de primaria, de secundaria,
                  reencuentros.se va a vivir afuera, volvió de vivir afuera,
                  graduaciones, cumple o aniversario, halloween, llegaron los
                  30, los 40, los 50 (última oportunidad). Estrenamos casa,
                  cuando decimos cualquier motivo, es cualquier motivo.
                </p>
              </div>
              <div>
                <div className="fotoColumnaA">
                  <video
                    height="500"
                    width="400"
                    loop
                    autoPlay
                    muted
                    src={videoTwo}
                    type="video/mp4"
                    alt="First slide"
                  ></video>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="columnaB">
              <div className="fotoColumnaB">
                <img
                  className="d-block w-100 widthHeightResponsive marginCenter"
                  src={adultsOne}
                  alt="First slide"
                  height="450"
                />
              </div>
              <div className="fotoColumnaB">
                <img
                  className="d-block w-100 widthHeightResponsive marginCenter"
                  src={adultsTwo}
                  alt="First slide"
                  height="450"
                />
              </div>
              <div>
                <img
                  className="d-block w-100 widthHeightResponsive marginCenter"
                  src={adultsThree}
                  alt="First slide"
                  height="450"
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default GaleriaCard;
