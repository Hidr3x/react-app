import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";
import NewPost from "./Newpost/NewPost";

const Myposts = () => {
  return (
    <div className={s.posts}>
      My posts
      <NewPost message=" hi" />
      <Post message=" hi" />
      <Post message=" hyi" />
    </div>
  );
};

export default Myposts;
