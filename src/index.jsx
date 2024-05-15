import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MainView } from "./components/view.jsx";
import store from "./app-store.js";

const TodoApp = () => {
  return (
    <Provider store={store}>
      <MainView class="main-view" />
    </Provider>
  );
};

ReactDOM.render(<TodoApp />, document.getElementById("root"));
