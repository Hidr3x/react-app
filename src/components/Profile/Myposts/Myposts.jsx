import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";


const Myposts = (props) => {
  const postItem = props.postsData.map (post => < Post message={post.message} image={post.image} likes={post.likesCount} username={post.username}/>)
  let newPostElement = React.createRef()
  let addPost = () => {
     props.addPost()
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts}>
      <h3>{props.name} </h3>
      <form>
        <textarea onChange = {onPostChange} ref={newPostElement} placeholder="введите текст" value ={props.newPostText}/>
        <div>
          <button type='button' onClick={addPost}>send</button>
        </div>
      </form>
      {postItem}
    </div>
  );
};

export default Myposts;
