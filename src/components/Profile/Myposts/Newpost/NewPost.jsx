import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    return ( 
        <div className={s.item}>
          {props.message}
        </div>
  )
}

export default NewPost;