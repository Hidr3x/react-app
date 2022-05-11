import React from "react";
import DialogItem from "./DialogItem";
import s from "./DialogCurrent.module.css";
import MessageItem from "./MessageItem";
import { NavLink } from "react-router-dom";

let newPostElement = React.createRef();
let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
};

const DialogCurrent = (props) => {
  const dialogItem = props.state.dialogs.map((dialog) => (
    <DialogItem userName={dialog.name} ID={dialog.ID} avatar={dialog.image} />
  ));
  const messageItem = props.state.messages.map((message) => (
    <MessageItem message={message.message} ID={message.ID} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogItem[props.number.ID - 1]}
        <div className={s.item}>
          <NavLink
            to="/dialogs"
            className={(Link) => (Link.isActive ? s.active : s.item)}
          >
            <button>←</button>
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        {messageItem[props.number.ID - 1]}
        <form>
          <textarea ref={newPostElement} placeholder="введите текст"></textarea>
          <div>
            <button onClick={addPost}>send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogCurrent;
