import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import state, {
  addPost,
  onPostChange,
  addMessage,
  onMessageChange,
  subscriber,
} from "./redux/state";
import * as serviceWorker from "./serviceWorker";

const renderEntireTree = (
  state,
  addPost,
  onPostChange,
  addMessage,
  onMessageChange
) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        onPostChange={onPostChange}
        addMessage={addMessage}
        onMessageChange={onMessageChange}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(state, addPost, onPostChange, addMessage, onMessageChange);

subscriber(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
