import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem";



const Dialogs = (props) => {
  const dialogItem = props.state.dialogs.map((dialog) => (
    <DialogItem userName={dialog.name} ID={dialog.ID} avatar={dialog.image} />
  ));
  const messageItem = props.state.messages.map((message) => (
    <MessageItem message={message.message} ID={message.ID} count={message.count}/>
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogItem}</div>
      <div className={s.messages}>{messageItem}</div>
    </div>
  );
};

export default Dialogs;
