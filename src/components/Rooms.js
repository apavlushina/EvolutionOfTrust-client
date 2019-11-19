import React from "react";
import { Link } from "react-router-dom";

export default function Rooms(props) {
  const list = props.rooms.map((room, index) => (
    <p key={index}>
      <Link to={`/room/${room.name}`}>{room.name}</Link>
    </p>
  ));
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          onChange={props.onChange}
          value={props.value} // !!! This sets the input display to be like the state; this makes it a fully controlled form
        />
        <button type="button" onClick={props.reset}>
          Reset
        </button>
        <button>Submit</button>
      </form>
      {list}
    </div>
  );
}
