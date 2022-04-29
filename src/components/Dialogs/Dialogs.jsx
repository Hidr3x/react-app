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

const dialogs = [
  { name: 'Pavlo', ID : '1'},
  { name: 'Vlad', ID :'2'},
  { name: 'Petya', ID :'3'},
]

const messages = [
  { message: 'Hi'},
  { message: 'How are you?'},
  { message: 'How old are you?'},
]

const dialogItem = dialogs.map( dialog => <DialogItem  userName = {dialog.name} ID = {dialog.ID}  />)
const messageItem = messages.map( message => <MessageItem  message = {message.message} />)

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogItem}
      </div>
      <div className={s.messages}>
      {messageItem}
      </div>
    </div>
  );
};

export default Dialogs;
