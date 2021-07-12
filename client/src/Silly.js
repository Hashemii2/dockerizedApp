import React, { Component } from "react";
import axios from "axios";

class silly extends Component {
  state = {
    text: {},
  };

  componentDidMount() {
    this.fetchtext();
  }

  async fetchtext() {
    const text = await axios.get("/api/");
    this.setState({ text: text.data });
  }

  render() {
    return (
      <div>
        <h3>From node js</h3>
        {this.fetchtext()}
      </div>
    );
  }
}

export default silly;
