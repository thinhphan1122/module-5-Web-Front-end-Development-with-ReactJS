import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "pink" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.color,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: "auto",
          }}
        />
      </div>
    );
  }
}

export default App;
