import React from "react";

import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import Header from "../components/Header";
import Ranges from "../components/Ranges";

import {} from "react-icons/";
import "./styles.css";

function Simulador() {
  return (
    <div id="page-landing">
      <Sidebar />
      <div id="main">
        <Topbar />
        <Header />
        <div id="charts">
          <div className="values">
            <h1>1. INVESTIMENTO SIMULADO</h1>
            <Ranges />
          </div>
          <div className="results"></div>
        </div>
      </div>
    </div>
  );
}

export default Simulador;
