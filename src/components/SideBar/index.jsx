import React from "react";

import { GoGraph } from "react-icons/go";
import { RiWallet2Line } from "react-icons/ri";

import "../../assets/styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <GoGraph />
      <RiWallet2Line />
    </div>
  );
}

export default Sidebar;
