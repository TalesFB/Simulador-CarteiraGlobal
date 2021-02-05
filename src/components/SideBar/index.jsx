import React from "react";

import { RiWallet2Line, RiFileCopy2Line, RiFileListLine } from "react-icons/ri";
import { AiOutlineStock, AiFillSignal } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { MdPieChartOutlined } from "react-icons/md";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { CgCopy } from "react-icons/cg";

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
      icon: <AiOutlineStock />,
      link: "/",
    },
    {
      icon: <RiFileListLine />,
      link: "/",
    },
    {
      icon: <MdPieChartOutlined />,
      link: "/",
    },
    {
      icon: <RiFileCopy2Line />,
      link: "/",
    },
    {
      icon: <AiFillSignal />,
      link: "/",
    },
    {
      icon: <BiBriefcaseAlt2 />,
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
