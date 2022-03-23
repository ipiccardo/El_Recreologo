import React from "react";
import headerImg from "../../assets/Page/recreologoblanco.png";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="hero imgenHero">
      <NavLink to={"Home"}>
        <img className="elRecreologo" src={headerImg} height={120} alt="Logo" />
      </NavLink>
    </div>
  );
};

export default Header;
