let rerender = () => {
}


let state = {
  profilePage: {
    postsData: [
      {
        ID: 1,
        message: "Hello, guys I'm begginer",
        likesCount: 30,
        image:
          "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg",
        username: "ak47",
      },
      {
        ID: 2,
        message: "The dog in the aven",
        likesCount: 15,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU",
        username: "SOVA",
      },
      {
        ID: 3,
        message: "Congratulation",
        likesCount: 20,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU",
        username: "RAmbo",
      },
    ],
    newPostText: ''
  },
  messagesPage: {
    dialogs: [
      {
        name: "Pavlo",
        ID: 1,
        image:
          "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg",
      },
      {
        name: "Vlad",
        ID: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU",
      },
      {
        name: "Petya",
        ID: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU",
      },
    ],
    messages: [
      { ID: 1, message: "Hi", count: 3 },
      { ID: 2, message: "How are you?", count: 2 },
      { ID: 3, message: "How old are you?", count: 10 },
    ],
  },
  sideBar: [
    {
      name: "Pavlo",
      ID: 1,
      image:
        "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg",
    },
    {
      name: "Vlad",
      ID: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVegZtYOISkSmBhRLnjh1xT3orqWNgwSQogA&usqp=CAU",
    },
    {
      name: "Petya",
      ID: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyVzhDXXgX0XkjxUdJytSRX5K_jJc574akQ&usqp=CAU",
    },
  ],
};


export const addPost = () => {
  let newPost = {
    ID:5,
    message: state.profilePage.newPostText,
    likesCount: 0,
    image:
          "https://art-nto.ru/800/600/https/pbs.twimg.com/media/DvNHaJHW0AA4Sib.jpg",
        username: "Voloday",
  }
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostText =''
  rerender(state)
}

export const updateNewPostText = (newText) =>{
  state.profilePage.newPostText = newText
  rerender(state)
}

export const describe = (observer) =>{
  rerender=observer
}

export default state;
