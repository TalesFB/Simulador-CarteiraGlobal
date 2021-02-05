import React from "react";

import { GoGraph } from "react-icons/go";
import { RiWallet2Line } from "react-icons/ri";

import "../../assets/styles/sidebar.css";

const Icons = ({ props }) => {
  return (
    <ul>
      <li>{props.icon}</li>
    </ul>
  );
};

function Sidebar() {
  const sidebarData = [
    {
      icon: <RiWallet2Line />,
      link: "/",
    },
    {
      icon: <GoGraph />,
      link: "/",
    },
  ];

  return (
    <div className="sidebar">
      {sidebarData.map((data) => (
        <Icons props={data} />
      ))}
    </div>
  );
}

export default Sidebar;
