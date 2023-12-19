// import logo from "./logo.svg";
import React, { Component } from "react";

// CSS
import "./App.css";
// import "./Form/css/Form.css";
// import "./Form/css/ValidateRegisterForm.css"
// import "./Form/css/ValidateLoginForm.css"

// Hook
// import Counter from "./components/counter";
// import Selector from "./components/selector";
// import MyClock from "./components/MyClock";
// import CarSelector from "./components/CarSelector";
// import Timer from "./components/Timer";
// import Counter2 from "./Hook/components/Counter2"

// Form
// import Form from "./Form/components/Form"
// import ValidateRegisterForm from "./Form/components/ValidateRegisterForm"
// import ValidateLoginForm from "./Form/components/ValidateLoginForm";
// import FormikValidateLoginForm from "./Form&Router/Form/components/FormikValidateLoginForm";

// Router
// import { Routes, Route, Link } from "react-router-dom";
// import About from "./Form&Router/Router/Router1/components/About";
// import Contact from "./Form&Router/Router/Router1/components/Contract";
// import Home from "./Form&Router/Router/Router1/components/Home";

// API Clients
// import axios from "axios";
// import AppRouters from "./AxiosDemo/routers/AppRouters";

// Redux
import { BrowserRouter, Routes, Route } from "react-router-dom";
// -ReduxSaga
// import Login from "./Redux/ReduxSaga/components/Login";
// import { Provider } from "react-redux";
// import store from "./Redux/ReduxSaga/redux/store";
// import User from "./Redux/ReduxSaga/components/User";
// -ReduxThunk
// import Login from "./Redux/ReduxThunk/components/Login";
// import { Provider } from "react-redux";
// import store from "./Redux/ReduxThunk/redux/store";
// import User from "./Redux/ReduxThunk/components/User";
// -Redux Toolkit
// import BookList from "./Redux/ReduxToolkit/components/book/BookList";
// import BookDetail from "./Redux/ReduxToolkit/components/book/BookDetail";
// import BookAdding from "./Redux/ReduxToolkit/components/book/BookAdding";
// import BookEditing from "./Redux/ReduxToolkit/components/book/BookEditing";
// HomeWork
// --TodoList (Redux)
// import NewTodo from "./Redux/Homework/TodoList/Components/NewToDo";
// import TodoList from "./Redux/Homework/TodoList/Components/ToDoList";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// --Shopping Cart (ReduxThunk)
// import ProductsList from "./Redux/Homework/ShoppingCart/components/ProductList";
// import Cart from "./Redux/Homework/ShoppingCart/components/Cart";

// function App() {
  // Default:
  // (
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  // );
  // Hook:
  // return <Counter />
  // return <Selector />;
  // return (
  //   <div class="Container">
  //     <MyClock />
  //   </div>
  // );
  // return <CarSelector />;
  // return (
  //   <div>
  //     <h1>
  //       Countdown from <Timer />
  //     </h1>
  //   </div>
  // );
  // return <Counter2 />;
  // React Form & Router:
  // -Form
  // return <Form />;
  // return <ValidateRegisterForm />;
  // return <ValidateLoginForm />;
  // return <FormikValidateLoginForm />;
  // -Router
  // return (
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">About</Link>
  //       </li>
  //       <li>
  //         <Link to="/contact">Contact</Link>
  //       </li>
  //     </ul>
  //     <hr />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Routes>
  //   </div>
  // );
  // Axios
  // return (
  //   <>
  //     <h2>Welcome to ITViec App</h2>
  //     <AppRouters />
  //   </>
  // );
  // Redux
  // -ReduxSaga
  // return (
  //   <Provider store={store}>
  //     {/* <BrowserRouter> */}
  //     <Routes>
  //       <Route path="/" element={<Login />} />
  //       <Route path="/users" element={<User />} />
  //     </Routes>
  //     {/* </BrowserRouter> */}
  //   </Provider>
  // );
  // -ReduxThunk
  // return (
  //   <Provider store={store}>
  //     {/* <BrowserRouter> */}
  //       <Routes>
  //         <Route path="/" element={<Login />} />
  //         <Route path="/users" element={<User />} />
  //       </Routes>
  //     {/* </BrowserRouter> */}
  //   </Provider>
  // );
  // -Redux Toolkit
  // return (
  //   // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<BookList />} />
  //       <Route path={`/book/:bookId`} element={<BookDetail />} />
  //       <Route path={"/book/add"} element={<BookAdding />} />
  //       <Route path={`/book/edit/:bookId`} element={<BookEditing />} />
  //     </Routes>
  //   // </BrowserRouter>
  // );
  // -Redux Homework
  // --TodoList (Redux)
  // return (
  //   <div className="container">
  //     <div style={{ marginTop: 40 }}>
  //       <h1>Todo list</h1>
  //       <div>
  //         <NewTodo />
  //       </div>
  //       <div>
  //         <TodoList />
  //       </div>
  //     </div>
  //   </div>
  // );
  // --ShoppingCart (Redux Thunk)
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <hr />
//       <ProductsList />
//       <hr />
//       <Cart />
//     </div>
//   );
// }

// Test
const App = () => {
  const value = 0;

  return (
    <div>
      <h1>Default value</h1>
      <div className="default-value">{value}</div>
    </div>
  );
};

export default App;
