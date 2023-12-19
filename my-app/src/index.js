import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import AppCounter from './AppCounter';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Redux/Homework/ShoppingCart/reducers";
import { getAllProducts } from "./Redux/Homework/ShoppingCart/actions";

// Redux Homework
// TodoList (Redux)
// import store from "./Redux/Homework/TodoList/redux/store";

// const middleware = [thunk];

// const store = createStore(reducer, applyMiddleware(...middleware));

// store.dispatch(getAllProducts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        {/* Example for counter */}
        {/* <AppCounter /> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
