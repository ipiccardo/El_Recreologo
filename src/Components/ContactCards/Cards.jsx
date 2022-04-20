import React from "react";
import "./styles.css";

const Cards = () => {
  return (
    <>
      <div className="PasosContainer">
        <section class="container">
          <div class="row">
            <div className="comoContactar">
              <h1 class="title4-long-responsive-section izq blue font-bold text-uppercase">
                ¿Cómo contactarnos?
              </h1>
              <h2>Paso 1:</h2>
              <h5 className="pasosTexto">
                ¡Escribinos!Podés usar el formulario de contacto que está más
                abajo, o por cualquiera de nuestras redes sociales. (FB,
                Instagram o cliqueá en nuestro botón de whatsapp)
              </h5>
              <br />
              <h2>Paso 2:</h2>
              <h5 className="pasosTexto">
                Reservá tu lugar, en el caso de que todavía no lo tengas.
              </h5>
              <br />
              <h2>Paso 3:</h2>
              <h5 className="pasosTexto">
                Confirmamos la fecha y horario en que adquirís el servicio.
              </h5>
              <h2>Paso 4:</h2>
              <h5 className="pasosTexto">¡¡¡LISTO!!!</h5>
            </div>
          </div>
        </section>
      </div>
      <div className="RedesContainer">
        <section class="container">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-12 mb-md-12 mb-12">
                <h1>También a través de nuestras redes y whatsapp:</h1>
                <div className="redesSociales">
                  <ul className="list-icons">
                    <li>
                      <a href="https://api.whatsapp.com/send?phone=+1123941289">
                        <i class="bi bi-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/elrecreologo/">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/elrecreologo/">
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <hr size="8" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cards;
