import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, { describe, store } from "./redux/state";
import "./index.css";
import { addPost, updateNewPostText} from "./redux/state";

let rerender = (state) => {
    ReactDOM.render(
      <App state={state} addPost={store.addPost} addMessage={store.addMessage} updateNewPostText = {store.updateNewPostText}/>,
      document.getElementById("root")
    );
  };
  rerender(state) 
  store.describe(rerender)