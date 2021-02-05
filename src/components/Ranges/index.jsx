import React, { createRef, useState, useEffect } from "react";
import "../../assets/styles/ranges.css";

const Input = ({ props }) => {
  return (
    <form className="ranges">
      <label>{props.label}</label>
      <span>{props.span}</span>
      <input
        type="range"
        min={0}
        max={200.0}
        step={1}
        defaultValue={props.defaultValue}
      />
    </form>
  );
};

function Ranges() {
  const inputs = [
    {
      label: "VALOR INVESTIDO",
      span: "R$" + {},
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "PERÍODO",
      span: {} + "meses",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA AO ANO DO CDB/LC",
      span: {} + "%",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA AO ANO DO LCI/LCA",
      span: {} + "%",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA DI",
      span: {} + " a.a",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA IPCA",
      span: {} + " a.a",
      defaultValue: 100,
      ref: createRef(),
    },
  ];

  return (
    <>
      {inputs.map((input) => (
        <Input props={input} />
      ))}
    </>
  );
}

export default Ranges;
