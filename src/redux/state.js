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
  },
  messagesPage: {
    dialogs: [
      { name: "Pavlo", ID: 1 },
      { name: "Vlad", ID: 2 },
      { name: "Petya", ID: 3 },
    ],
    messages: [
      { ID: 1, message: "Hi" },
      { ID: 2, message: "How are you?" },
      { ID: 3, message: "How old are you?" },
    ],
  },
};

export default state;
