import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

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
      number: 0,
    };
  }

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: 30 }}>
        <button onClick={this.decrease}>Decrease</button>
        <span style={{ padding: 10 }}>{this.state.number}</span>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default App;
