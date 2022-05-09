import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import s from "./Navbar.module.css";


const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to= "/profile" className= { Link => Link.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to = "/dialogs" className= { Link => Link.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to = "/news"  className= { Link => Link.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to = "/music"  className= { Link => Link.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to = "/settings"  className= { Link => Link.isActive ? s.active : s.item}>Settings</NavLink>
      </div>
      <Sidebar state = {props.state}/>
    </nav>
  );
};

export default Navbar;
