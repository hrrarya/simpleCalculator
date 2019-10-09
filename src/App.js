import React, { Component } from "react";
import "./App.css";
import Input from "./components/input";
import Button from "./components/buttons";

class App extends Component {
  state = {
    button: [7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "=", "/"],
    result: ""
  };

  onClick = result => {
    if (result === "Clear") {
      this.reset();
    } else if (result === "=") {
      this.calculate();
    } else {
      this.setState({
        result: this.state.result + result
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  calculate = () => {
    let checkResult = "";
    let { result } = this.state;

    if (result.includes("--")) checkResult = result.replace("--", "+");
    else {
      checkResult = result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-4">
            <Input result={this.state.result} />
            <Button button={this.state.button} onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
