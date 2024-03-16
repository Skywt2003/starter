import React, { Component } from "react";
import "./style.css";
import moment from "moment";

class App extends Component {
  render (): React.JSX.Element {
    return (
      <div className="App">
        <h1 className="text-4xl">Hello, World!</h1>
        <p>{moment().format()}</p>
      </div>
    );
  }
}

export default App;
