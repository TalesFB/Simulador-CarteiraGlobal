import React from "react";

import { GoGraph } from "react-icons/go";
import { RiWallet2Line } from "react-icons/ri";
import LogoCG from "../../assets/imagens/logo-icon.svg";

import "../../assets/styles/sidebar.css";

const Icons = ({ props }) => {
  return (
    <li>
      <a className="item-icone" href={props.link}>
        {props.icon}
      </a>
    </li>
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
      <img src={LogoCG} alt="" />
      <ul>
        {sidebarData.map((data) => (
          <Icons props={data} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
