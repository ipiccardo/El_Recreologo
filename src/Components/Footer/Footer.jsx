import React from "react";

import footerImg from "../../assets/recreologo.png";
import Logo from "../../assets/Logomin.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className="contenedorFooter">
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mb-md-0 mb-3">
              <div className="redesContainer">
                <ul>
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
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=+1123941289">
                      <i class="bi bi-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <img src={Logo} alt="Logo" width="80" height={80} />
              <br />
              <img src={footerImg} height={120} alt="Logo" />
            </div>
            <hr className="clearfix w-100 d-md-none pb-0" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
