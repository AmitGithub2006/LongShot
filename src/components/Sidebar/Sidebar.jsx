import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

import {AiFillHome} from "react-icons/ai"
import {MdDashboard} from "react-icons/md";
import { SiJusteat } from "react-icons/si";
import {BiNews} from "react-icons/bi";
import {IoExtensionPuzzleSharp} from "react-icons/io5";
import {MdFavorite} from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { SiBookstack } from "react-icons/si";
import {SiMediafire} from "react-icons/si";
import { BiArrowToLeft } from "react-icons/bi";

import "./Sidebar.css";

function Sidebar({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: (
        <h4>
          <span className='project'>Project</span> <p>My First Project</p>
        </h4>
      ),
      icon: <AiFillHome />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/recipes",
      name: "Recipes",
      icon: <SiJusteat />,
    },
    {
      path: "/blogs",
      name: "Blogs",
      icon: <BiNews />,
    },
    {
      path: "/templates",
      name: "Templates",
      icon: <IoExtensionPuzzleSharp />,
    },
    {
      path: "/favorites",
      name: "Favorites",
      icon: (
        <span className="favorites_icon">
          <MdFavorite />
        </span>
      ),
    },
    {
      path: "/custom",
      name: "Custom",
      icon: (
        <span className="custom_icon">
          <VscCircleFilled />
        </span>
      ),
    },
    {
      path: "/integrations",
      name: "Integrations",
      icon: <SiBookstack />,
    },
    {
      path: "/semrush",
      name: "Semrush",
      icon: (
        <span className="semrush_icon">
          <SiMediafire />
        </span>
      ),
    },
  ];
  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "18vw" : "4vw" }}>
        <img
          className="longshot_logo"
          src="https://uploads-ssl.webflow.com/62a1d5337c2a860b919132f8/62baeb2e2cd714a19a955183_longshot%20logo.svg"
          alt="LongShot Logo"
        />
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{ display: isOpen ? "inline" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div className="bottom_section">
          <div onClick={toggle}>
            <span className="icon">
              <BiArrowToLeft />
            </span>
            <span
              style={{ display: isOpen ? "inline" : "none" }}
              className="collapse"
            >
              Collapse
            </span>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;