import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import Header from "../components/Header";
import Ranges from "../components/Ranges";

import "./styles.css";

function Simulador() {
  const options = {
    chart: {
      type: "column",
      spacing: [20, 40, 20, 20],
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          useHTML: true,
          formatter: function () {
            return `Rendimento<br/>${Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(parseFloat(this.y) * 36000)}`;
          },
        },
      },
    },
    colors: ["#8c979f", "#447cff", "#5ac7ff", "#e4e6e8"],
    xAxis: {
      // visible: false,
      // lineColor: "transparent",
      // tickLength: 0,
      labels: {
        formatter: function () {
          return `${
            this.value
          } <br/><strong style="font-size: 15px">${Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(
            this.chart.series[0].yData[this.pos] * 36000 + 100000
          )}</strong>`;
        },
      },
      categories: ["TOTAL LÍQUIDO", "TOTAL LÍQUIDO", "TOTAL LÍQUIDO"],
    },
    yAxis: {
      title: {
        text: null,
      },
      opposite: true,
      labels: {
        align: "right",
        formatter: function () {
          return Intl.NumberFormat("pt-BR", {
            style: "percent",
            maximumFractionDigits: 0,
          }).format(this.value);
        },
      },
      // gridLineWidth: 0,
      // minorGridLineWidth: 0,
    },
    series: [
      {
        name: "TOTAL LÍQUIDO",
        data: [0.5, 0.7, 0.8],
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
