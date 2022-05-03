import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";


const DialogItem = (props) => {
    return (
      <div className={s.dialogItem}>
        <NavLink
          to={"/dialog/" + props.ID}
          className={(Link) => (Link.isActive ? s.active : "")}
        >
          {props.userName}
        </NavLink>
      </div>
    );
  };


  export default DialogItem;