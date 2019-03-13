import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick"
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="row">
        Full name
        <input value={this.state.name} onChange={this.handleNameChange} />
      </div>
    );
  }
}

export default Card;
