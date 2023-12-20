import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }

  handleToggleEvent = () => {
    this.setState((prevState) => ({
      isExpand: !prevState.isExpand,
    }));
  };

  render() {
    const { isExpand } = this.state;

    if (isExpand) {
      return (
        <div>
          <h1>Conditional Rendering</h1>
          <button onClick={this.handleToggleEvent}>Xem giới thiệu</button>
        </div>
      );
    } else if (!isExpand) {
      return (
        <div>
          <h1>Conditional Rendering</h1>
          <button onClick={this.handleToggleEvent}>Đóng giới thiệu</button>
          <p>Nội dung giới thiệu</p>
        </div>
      );
    }
  }
}

export default App;
