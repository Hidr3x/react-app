import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, { describe } from "./redux/state";
import "./index.css";
import { addPost, updateNewPostText} from "./redux/state";

let rerender = (state) => {
    ReactDOM.render(
      <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>,
      document.getElementById("root")
    );
  };
  rerender(state) 
  describe(rerender)