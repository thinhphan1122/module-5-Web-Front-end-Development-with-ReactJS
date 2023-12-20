import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: '',
    };
  }

  handleAddItem = () => {
    const { item, list } = this.state;

    if (item.trim() !== '') {
      const updatedList = [...list, item];
      this.setState({
        list: updatedList,
        item: '',
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  render() {
    const { list, item } = this.state;

    return (
      <div>
        <input type="text" value={item} onChange={this.handleChange} />
        <button onClick={this.handleAddItem}>Add Item</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
