import React from "react";
import s from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <div className={s.image}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9_wO3cLBMAShSvHxfqqw3pBRut041Lwzdw&usqp=CAU"></img>
    </div>
  );
};

export default Avatar;
