import React, { createRef, useState, useEffect } from "react";
import "../../assets/styles/ranges.css";

const Input = ({ props }) => {
  const [rateOptions, setRateOptions] = useState([
    {
      value: 0,
      label: "% do CDI",
      min: 0.1,
      max: 2,
      defaultValue: 1,
      step: 0.01,
      active: true,
    },
    {
      value: 1,
      label: "CDI + %",
      min: -0.03,
      max: 0.03,
      defaultValue: 0.01,
      step: 0.001,
    },
    {
      value: 3,
      label: "IPCA + %",
      min: 0.01,
      max: 0.15,
      defaultValue: 0.05,
      step: 0.005,
    },
    {
      value: 4,
      label: "Prefixado",
      min: 0.03,
      max: 0.15,
      defaultValue: 0.08,
      step: 0.005,
    },
  ]);

  const [value, setValue] = useState(
    props.hasSelect ? getCurrentoption()?.defaultValue : props.defaultValue
  );

  function optionSelect(value) {
    setRateOptions((options) =>
      options.map((option) => {
        return option.value == value
          ? { ...option, active: true }
          : { ...option, active: false };
      })
    );
  }

  function getCurrentoption() {
    return rateOptions.find((option) => option.active); //para cada opção dentro de rateOptions sera testado se esta ativa e se tiver ativa retorna a primeria insidencia.
  }

  function format(value) {
    switch (props.type) {
      case "moeda":
        return Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value); //transforma o value em valor real brasileiro

      case "meses":
        return value == 1 ? `1 mês` : `${value} meses`; //interpolação da variavel value e a string.

      case "percentual":
        return `${value} %`;

      case "taxa":
        return `${value} % a.a`;
    }
  }

  return (
    <>
      <label>{props.label}</label>
      {props.hasSelect && (
        <select
          className="options"
          onChange={(e) => optionSelect(e.target.value)}
          defaultValue={getCurrentoption().value}
        >
          {rateOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      )}
      <span>{format(value)}</span>
      <input
        type="range"
        min={props.hasSelect ? getCurrentoption().min * 100 : props.min} //operador ternário com tres opções(condição ? if : else)
        max={props.hasSelect ? getCurrentoption().max * 100 : props.max}
        step={props.hasSelect ? getCurrentoption().step * 100 : props.step}
        defaultValue={
          props.hasSelect
            ? getCurrentoption().defaultValue * 100
            : props.defaultValue
        }
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
      min: 5000,
      max: 1e6,
      defaultValue: 100000,
      step: 5000,
    },
    {
      label: "PERÍODO",
      type: "meses",
      min: 1,
      max: 120,
      defaultValue: 25,
      step: 1,
    },
    {
      label: "TAXA AO ANO DO CDB/LC",
      hasSelect: true,
      type: "percentual",
    },
    {
      label: "TAXA AO ANO DO LCI/LCA",
      hasSelect: true,
      type: "percentual",
    },
    {
      label: "TAXA DI",
      type: "taxa",
      min: 0.01,
      max: 0.2,
      defaultValue: 0.059,
      step: 0.001,
    },
    {
      label: "TAXA IPCA",
      type: "taxa",
      min: 0.01,
      max: 0.2,
      defaultValue: 0.035,
      step: 0.001,
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
