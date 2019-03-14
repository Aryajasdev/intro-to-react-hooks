import React, { Component } from "react";

import { ThemeContext } from "./themeContext";
import MousePosition from "./MousePosition";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Harry",
      surname: "Potter",
      width: window.innerWidth
    };
  }

  componentDidMount() {
    document.title = `${this.state.name} ${this.state.surname}`;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth
    });
  };

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
          <MousePosition>
            {({ x, y }) => (
              <div className={theme}>
                Full name class
                <input
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <input
                  value={this.state.surname}
                  onChange={this.handleSurnameChange}
                />
                <div>{this.state.width}</div>
                <div>
                  {x} + {y}
                </div>
              </div>
            )}
          </MousePosition>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Card;
