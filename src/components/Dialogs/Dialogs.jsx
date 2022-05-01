import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import s from "./Dialogs.module.css";
// import {dialogs} from "../../../src/index"
// import {messages} from "../../../src/index"

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

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

let dialogs = [
  { name: "Pavlo", ID: 1 },
  { name: "Vlad", ID: 2 },
  { name: "Petya", ID: 3 },
];

let messages = [
  { ID: 1, message: "Hi" },
  { ID: 2, message: "How are you?" },
  { ID: 3, message: "How old are you?" },
];

const Dialogs = (props) => {
  const dialogItem = props.dialogs.map((dialog) => (
    <DialogItem userName={dialog.name} ID={dialog.ID} />
  ));
  const messageItem = props.messages.map((message) => (
    <MessageItem message={message.message} ID={message.ID} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogItem}</div>
      <div className={s.messages}>{messageItem}</div>
    </div>
  );
};

export default Dialogs;
