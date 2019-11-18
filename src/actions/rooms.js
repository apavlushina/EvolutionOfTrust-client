import request from "superagent";
import { url } from "../constants";

export const SHOW_ROOMS = "SHOW_ROOMS";

function showRooms(payload) {
  return {
    type: SHOW_ROOMS,
    payload
  };
}

export const renderRooms = () => (dispatch, getState) => {
  //   console.log("dispatch test");
  // request
  //   .post(`${baseUrl}/room`)
  //   .send(name)
  //   .then(response => {
  //     //   console.log(response.text);
  //     const action = showRooms(response.text);
  //     dispatch(action);
  //   })
  //   .catch(console.error);
  const state = getState();

  stream = new EventSource(`${url}/stream`); // EventSource is built in in JS; argument is where we connect to the stream

  // something that happens one time should be put here: showing messages
  this.stream.onmessage = event => {
    console.log("event test", event);
    // the onmessage property catches the stream data that is sent to the client (what was passed to stream.send in the backend)
    const { data } = event; // each event has an ID and data

    const parsed = JSON.parse(data); // this turns serialized JS string (it was '['','']') back to JSON data (['',''] to be mapped)

    if (Array.isArray(parsed)) {
      // Array.isArray(arg) checks if the arg is an array
      // we do this because the data can be an array (all old msgs) or a string (a single msg)
      const action = showRooms({ rooms: parsed });
      dispatch(action);

      //this.setState({ rooms: parsed }); // if it is an array we assume it contains all the messages
    } else {
      console.log("we can get there");
      const action = showRooms([...state.rooms, parsed]);
      dispatch(action);
      // const rooms = [...this.state.rooms, parsed]; // if it is a string, we add it to the old msgs
      // console.log(rooms);
      // this.setState({ rooms }); // remember? setState has to take an argument of the state OBJECT, and it sets the property whichever you puts into the state object as argument
    }
  };
};

export const NEW_ROOM = "NEW_ROOM";

function newRoom(payload) {
  return {
    type: NEW_ROOM,
    payload
  };
}

export const createRoom = data => (dispatch, getState) => {
  const state = getState();
  const { rooms, value } = state;

  const { value } = this.state;

  const postUrl = `${url}/room`;

  request
    .post(postUrl)
    .send({ name: value }) // the send ALWAYS takes an object, which will be the body of the request -> message="value"
    .then(response => {
      const action = newRoom(response.body);

      dispatch(action);
    })
    .catch(console.error);

  this.setState({ value: "" }); //NOT WORKING! solved -> must include value attribute in input JSX element; see below
  this.state.value = "";

  // request
  //   .post(`${baseUrl}/image`)
  //   .set("Authorization", `Bearer ${user}`)
  //   .send(data)
  //   .then(response => {
  //     const action = newRoom(response.body);

  //     dispatch(action);
  //   })
  //   .catch(console.error);
};
