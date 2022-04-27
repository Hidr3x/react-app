import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem =(props) => {
  return (
    <div className={s.dialogItem}>
          <NavLink to={'/dialog/' + props.ID} className= { Link => Link.isActive ? s.active : s.dialogItem}>{props.userName}</NavLink>
        </div>
  )
}

const MessageItem =(props) => {
  return (
          <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem userName ='Pavlo' ID='1' />
        <DialogItem userName ='Vlad' ID='2' />
        <DialogItem userName ='Petya' ID='3' />
      </div>
      <div className={s.messages}>
        <MessageItem message = 'Hi'/>
        <MessageItem message = 'How are you?'/>
        <MessageItem message = 'How old are you?'/>
      </div>
    </div>
  );
};

export default Dialogs;
