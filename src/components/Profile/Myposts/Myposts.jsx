import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";


const Myposts = (props) => {
  const postItem = props.postsData.map (post => < Post message={post.message} image={post.image} likes={post.likesCount} username={post.username}/>)

  return (
    <div className={s.posts}>
      <h3>{props.name} </h3>
      <form>
        <textarea placeholder="введите текст"></textarea>
        <div>
          <button>send</button>
        </div>
      </form>
      {postItem}
    </div>
  );
};

export default Myposts;
