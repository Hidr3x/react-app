import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";


const Myposts = (props) => {
  const postItem = props.postsData.map (post => < Post message={post.message} image={post.image} likes={post.likesCount} username={post.username}/>)
  let newPostElement = React.createRef()
  let addPost = ()=>{
     let text = newPostElement.current.value;
     props.addPost(text)
  }
  
  return (
    <div className={s.posts}>
      <h3>{props.name} </h3>
      <form>
        <textarea ref={newPostElement} placeholder="введите текст"></textarea>
        <div>
          <button onClick={addPost}>send</button>
        </div>
      </form>
      {postItem}
    </div>
  );
};

export default Myposts;
