import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

// let paths = [
//   { patth: "/", eleement: Profile },
//   { patth: "/dialogs", eleement: Dialogs, objects: postsData, props: props.postData  },
//   { patth: "/profile", eleement: Profile, objects: postsData  },
//   { patth: "/news" , eleement: News, objects: postsData },
//   { patth: "/music", eleement: Music, objects: postsData  },
//   { patth: "/settings" , eleement: Settings, objects: postsData },
//   { patth: "/dialog/1" , eleement: Dialogs, objects: postsData },
//   { patth: "/dialog/2" , eleement: Dialogs, objects: postsData },
//   { patth: "/dialog/3", eleement: Dialogs , objects: postsData },
// ];

// let path = paths.map(item => (
//   <Route path={item.patth} element= {< item.eleement  />} />
// ));

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* {path} */}
            <Route path="/" element={<Profile postsData = {props.postsData}/>} />
            <Route path="/dialogs" element={<Dialogs  dialogs = {props.dialogs} messages = {props.messages}/>} />
            <Route path="/profile" element={<Profile postsData = {props.postsData}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dialog/1" element={<Dialogs dialogs = {props.dialogs} messages = {props.messages}/>} />
            <Route path="/dialog/2" element={<Dialogs dialogs = {props.dialogs} messages = {props.messages}/>} />
            <Route path="/dialog/3" element={<Dialogs dialogs = {props.dialogs} messages = {props.messages}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
