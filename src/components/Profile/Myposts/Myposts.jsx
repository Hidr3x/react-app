import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";
// import {postsData} from "../../../../src/index"

// let postsData = [
//   { ID : 1, message: "Hello, guys I'm begginer", likesCount: 30,  image: "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg", username: "ak47"},
//   { ID : 2, message: "The dog in the aven", likesCount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU", username: "SOVA"},
//   { ID : 3, message: "Congratulation", likesCount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU", username: "RAmbo"},
// ]


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
