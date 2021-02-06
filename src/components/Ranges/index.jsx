import React, { createRef, useState, useEffect } from "react";
import "../../assets/styles/ranges.css";

const Input = ({ props }) => {
  const [value, setValue] = useState(props.defaultValue);
  const rateOptions = [
    {
      value: 0,
      label: "% do CDI",
    },
    {
      value: 1,
      label: "CDI + %",
    },
    {
      value: 3,
      label: "IPCA + %",
    },
    {
      value: 4,
      label: "Prefixado",
    },
  ];

  function format(value) {
    switch (props.type) {
      case "moeda":
        return Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value);

      case "meses":
        return value == 1 ? `1 mês` : `${value} meses`; //onterpolação da variavel value e a string.

      case "percentual":
        return `${value} %`;

      case "taxa":
        return `${value} a.a`;
    }
  }

  return (
    <>
      <label>{props.label}</label>
      {props.hasSelect && (
        <select className="options">
          {rateOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      )}
      <span>{format(value)}</span>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step || 1}
        defaultValue={props.defaultValue}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

function Ranges() {
  const inputs = [
    {
      label: "VALOR INVESTIDO",
      type: "moeda",
      min: 1,
      max: 2e5,
      defaultValue: 100,
    },
    {
      label: "PERÍODO",
      type: "meses",
      min: 1,
      max: 48,
      defaultValue: 1,
    },
    {
      label: "TAXA AO ANO DO CDB/LC",
      hasSelect: true,
      type: "percentual",
      min: 0,
      max: 200,
      defaultValue: 100,
    },
    {
      label: "TAXA AO ANO DO LCI/LCA",
      hasSelect: true,
      type: "percentual",
      min: 0,
      max: 200,
      defaultValue: 100,
    },
    {
      label: "TAXA DI",
      type: "taxa",
      min: 0,
      max: 12.8,
      step: 0.1,
      defaultValue: 1,
    },
    {
      label: "TAXA IPCA",
      type: "taxa",
      min: 0,
      max: 12.8,
      step: 0.1,
      defaultValue: 1,
    },
  ];

  return (
    <form className="ranges">
      {inputs.map((input) => (
        <Input props={input} />
      ))}
    </form>
  );
}

export default Ranges;
