import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let postsData = [
    { ID : 1, message: "Hello, guys I'm begginer", likesCount: 30,  image: "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg", username: "ak47"},
    { ID : 2, message: "The dog in the aven", likesCount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU", username: "SOVA"},
    { ID : 3, message: "Congratulation", likesCount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU", username: "RAmbo"},
  ]

  let dialogs = [
    { name: "Pavlo", ID: 1 },
    { name: "Vlad", ID: 2 },
    { name: "Petya", ID: 3 },
  ];
  
  let messages = [
    { ID: 1, message: "Hi" },
    { ID: 2, message: "How are you?" },
    { ID: 3, message: "How old are you?" },
  ];

ReactDOM.render(<App postsData = {postsData} dialogs = {dialogs} messages = {messages}/>, document.getElementById('root'));

// let dialogs = [
//     { name: 'Pavlo', ID : 1},
//     { name: 'Vlad', ID :2},
//     { name: 'Petya', ID :3},
//   ]
  
// let messages = [
//     { ID : 1, message: 'Hi'},
//     { ID : 2, message: 'How are you?'},
//     { ID : 3, message: 'How old are you?'},
//   ]

// let postsData = [
//     { ID : 1, message: "Hello, guys I'm begginer", likesCount: 30,  image: "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg", username: "ak47"},
//     { ID : 2, message: "The dog in the aven", likesCount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU", username: "SOVA"},
//     { ID : 3, message: "Congratulation", likesCount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU", username: "RAmbo"},
//   ]

//  export default  Myposts;
// // export  {messages};
// export  {postsData};