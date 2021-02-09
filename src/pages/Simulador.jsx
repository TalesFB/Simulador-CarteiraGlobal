import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import Header from "../components/Header";
import Ranges from "../components/Ranges";

import {} from "react-icons/";
import "./styles.css";

function Simulador() {
  const options = {
    chart: {
      type: "column",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    colors: ["#8c979f", "#447cff", "#5ac7ff", "#e4e6e8"],
    xAxis: {
      visible: false,
      lineColor: "transparent",
      tickLength: 0,
    },
    yAxis: {
      title: {
        text: "",
      },
      gridLineWidth: 0,
      minorGridLineWidth: 0,
    },
    series: [
      {
        name: "TOTAL LÍQUIDO",
        data: [0.5],
      },
      {
        name: "TOTAL LÍQUIDO",
        data: [0.7],
      },
      {
        name: "TOTAL LÍQUIDO",
        data: [0.8],
      },
    ],
  };
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
          <div className="results">
            <h1>2. VALOR ESPERADO</h1>
            <HighchartsReact
              Highcharts={Highcharts}
              options={options}
              className="chart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simulador;
