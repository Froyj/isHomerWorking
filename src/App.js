import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      working: !this.state.working
    }));
  }
  render() {
    const isWorking = this.state.working ? 'App-logo working' : 'App-logo'
    const isHomerWorking = this.state.working ? 'Homer is working' : 'Homer is eating a donut'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={isWorking} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="Homer">
          <button
            onClick={this.handleClick}
          >
            {isHomerWorking}
          </button>
          <figure />
        </div>

      </div>
    );
  }
}

export default App;