import React from "react";

import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import Header from "../components/Header";

import {} from "react-icons/";
import "./styles.css";

function Simulador() {
  return (
    <div id="page-landing">
      <Sidebar />
      <div id="main">
        <Topbar />
        <Header />
        <div id="graphs">
          <div className="values">
            <h1>1. INVESTIMENTO SIMULADO</h1>
            <h3>VALOR INVESTIDO</h3>
          </div>
          <div className="results"></div>
        </div>
      </div>
    </div>
  );
}

export default Simulador;
