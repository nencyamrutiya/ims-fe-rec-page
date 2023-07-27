import React from "react";
import "../styles/LeftMenu.css";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <h2>SoundSnap</h2>
        </div>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} listObject={MenuList} />
    </div>
  );
}

export { LeftMenu };
