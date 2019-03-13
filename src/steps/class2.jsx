import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick",
      surname: "Sanchez"
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSurnameChange = event => {
    this.setState({
      surname: event.target.value
    });
  };

  render() {
    return (
      <div className="row">
        Full name
        <input value={this.state.name} onChange={this.handleNameChange} />
        <input value={this.state.surname} onChange={this.handleSurnameChange} />
      </div>
    );
  }
}

export default Card;
