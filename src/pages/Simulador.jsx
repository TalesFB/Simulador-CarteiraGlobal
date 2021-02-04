import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { RiWallet2Line } from "react-icons/ri";
import {} from "react-icons/";
import "./styles.css";

function Simulador() {
  return (
    <div id="page-landing">
      <div id="main">
        <div className="topbar">
          <a className="help" href="">
            <AiFillQuestionCircle />
          </a>
          <a className="moon" href="">
            <FaMoon />
          </a>
          <img
            src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
            alt=""
          />
        </div>
        <h3>RENDA FIXA</h3>
        <h1>Simulador de Renda fixa</h1>
      </div>
    </div>
  );
}

export default Simulador;
