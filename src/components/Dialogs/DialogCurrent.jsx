import React from "react";
import DialogItem from "./DialogItem";
import s from "./DialogCurrent.module.css";
import MessageItem from "./MessageItem";
import { NavLink } from "react-router-dom";
import { updateNewPostTextActionCreator } from "../../redux/state";

const DialogCurrent = (props) => {
  let newPostElement = React.createRef();
  let addMessage = () => {
    props.dispatch({type:"ADD-MESSAGE"});
    newPostElement.current.value ='';
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };
  const dialogItem = props.state.dialogs.map((dialog) => (
    <DialogItem userName={dialog.name} ID={dialog.ID} avatar={dialog.image} />
  ));
  const messageItem = props.state.currentmessages.map((message) => (
    <MessageItem message={message.message} />
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
        {messageItem} 
        <form>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            placeholder="введите текст"
            value={props.newPostText}
          />
          <div>
            <button type="button" onClick={addMessage}>
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogCurrent;
