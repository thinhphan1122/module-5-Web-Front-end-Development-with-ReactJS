import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const [counter, setcounter] = useState(0);

  return (
    <div>
      <h1>This is counter app</h1>
      <div className="counter-value">Count: {counter}</div>
      <button className="increment" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
      <button className="decrement" onClick={() => setcounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default App;
