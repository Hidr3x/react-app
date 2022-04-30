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


const App = (props) => {
  return (
 <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes >
          <Route path="/" element={<Profile/>} />
          <Route path="/dialogs" element={<Dialogs/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/dialog/1" element={<Dialogs/>} />
          <Route path="/dialog/2" element={<Dialogs/>} />
          <Route path="/dialog/3" element={<Dialogs/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
)
}

export default App;
