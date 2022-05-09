import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./SidebarItem.module.css";


const SidebarItem= (props) => {
    return (
      <div className={s.sidebarItem}>
        <img src={props.image}></img>{props.name}</div>
    );
  };


  export default SidebarItem;