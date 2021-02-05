import React, { createRef, useState, useEffect } from "react";
import "../../assets/styles/ranges.css";

const Input = ({ props }) => {
  return (
    <form className="ranges">
      <label>{props.label}</label>
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
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "PERÍODO",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA AO ANO DO CDB/LC",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA AO ANO DO LCI/LCA",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA DI",
      defaultValue: 100,
      ref: createRef(),
    },
    {
      label: "TAXA IPCA",
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
