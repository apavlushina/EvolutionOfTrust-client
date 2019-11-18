import React, { Component } from "react";

class Rooms extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.value} // !!! This sets the input display to be like the state; this makes it a fully controlled form
          />
          <button type="button" onClick={this.props.reset}>
            Reset
          </button>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Rooms;
