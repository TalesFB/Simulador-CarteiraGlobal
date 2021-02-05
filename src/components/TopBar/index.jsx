import React from "react";

import { AiFillQuestionCircle } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

import "../../assets/styles/topbar.css";

function Topbar() {
  return (
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
  );
}

export default Topbar;
