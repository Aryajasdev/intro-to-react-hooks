import React, { Component } from "react";

// import { ThemeContext } from "./themeContext";
// import MousePosition from "./MousePosition";
import { ThemeContext } from "../themeContext";
import MousePosition from "../MousePosition";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick",
      surname: "Sanchez",
      width: window.innerWidth
    };
  }

  componentDidMount() {
    document.title = `${this.state.name} ${this.state.surname}`;
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentDidUpdate() {
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
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
      <MousePosition>
        {({ x, y }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div className={theme}>
                Full name
                <input
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <input
                  value={this.state.surname}
                  onChange={this.handleSurnameChange}
                />
                <div>{`width: ${this.state.width}`}</div>
                <div>{`x:${x} y:${y}`}</div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </MousePosition>
    );
  }
}

export default Card;
