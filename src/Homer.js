import React, { Component } from 'react';

class Homer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.on
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      working: !this.state.working
    }));
  }  
  
  render() {
    const work = this.state.working ? 'work' : 'not-working';
    return (
      <div className="Homer">
        <button
          onClick={this.handleClick}
          >
          {work.toUpperCase()}
        </button>
        <figure />
      </div>
    );
  }
}

export default Homer;