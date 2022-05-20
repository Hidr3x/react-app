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
import DialogCurrent from "./components/Dialogs/DialogCurrent";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state ={props.state}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile state ={props.state.profilePage}/>} />
            <Route path="/dialogs" element={<Dialogs  state = {props.state.messagesPage} messages = {props.state.messagesPage}/>} />
            <Route path="/profile" element={<Profile state ={props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dialog/1" element={<DialogCurrent state = {props.state.messagesPage} addMessage={props.addMessage} updateNewPostText = {props.updateNewPostText} currentmessages = {props.state.messagesPage} number={props.state.messagesPage.dialogs[0]}/>} />
            <Route path="/dialog/2" element={<DialogCurrent state = {props.state.messagesPage} addMessage={props.addMessage} updateNewPostText = {props.updateNewPostText} currentmessages = {props.state.messagesPage} number={props.state.messagesPage.dialogs[1]}/>} />
            <Route path="/dialog/3" element={<DialogCurrent state = {props.state.messagesPage} addMessage={props.addMessage} updateNewPostText = {props.updateNewPostText} currentmessages = {props.state.messagesPage} number={props.state.messagesPage.dialogs[2]}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
