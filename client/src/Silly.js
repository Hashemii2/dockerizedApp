import React, { Component } from "react";
import axios from "axios";

class silly extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api");
      this.setState({ data: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const data = this.state.data;

    return (
      <div>
        <h3>this data is From node js:</h3>
        {data.map((d) => (
          <div>{d.name}</div>
        ))}
      </div>
    );
  }
}

export default silly;
