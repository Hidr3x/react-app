import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";


const Myposts = (props) => {
  return ( 
    <div className={s.posts}>
      {props.name}
      <form><textarea  placeholder="введите текст"></textarea> <button>send</button></form>
      <Post message = "Hello, guys I'm begginer" image = "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg" likes = "30" username = "ak47"/> 
      <Post message = "The dog in the aven" image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU" likes = "20" username = "SOVA"/>
      <Post message = "Congratulation" image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU" likes = "15" username = "RAmbo"/>
    </div>
  );
};

export default Myposts;
