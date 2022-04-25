import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.username}><img src={props.image}></img>{props.username}</div>
      {props.message}
      <div>likes: {props.likes}</div>
    </div>
  );
};

export default Post;
