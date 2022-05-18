import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <Myposts name="My posts" postsData = {props.state.postsData} addPost = {props.addPost}/>
    </div>
  );
};

export default Profile;
