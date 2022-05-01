import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  let postsData = [
    { ID : 1, message: "Hello, guys I'm begginer", likesCount: 30,  image: "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg", username: "ak47"},
    { ID : 2, message: "The dog in the aven", likesCount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU", username: "SOVA"},
    { ID : 3, message: "Congratulation", likesCount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU", username: "RAmbo"},
  ]
  return (
    <div>
      <ProfileInfo />
      <Myposts name="My posts" postsData = {props.postsData}/>
    </div>
  );
};

export default Profile;
