import React, { Component } from "react";

// import { ThemeContext } from "./themeContext";
import { ThemeContext } from "../themeContext";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick",
      surname: "Sanchez"
    };
  }

  componentDidMount() {
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  componentDidUpdate() {
    document.title = `${this.state.name} ${this.state.surname}`;
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
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme}>
            Full name
            <input value={this.state.name} onChange={this.handleNameChange} />
            <input
              value={this.state.surname}
              onChange={this.handleSurnameChange}
            />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Card;
