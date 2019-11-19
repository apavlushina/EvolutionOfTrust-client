import request from "superagent";
import { url } from "../constants";

export const SHOW_ROOMS = "SHOW_ROOMS";

export function showRooms(payload) {
  return {
    type: SHOW_ROOMS,
    payload
  };
}

export const ADD_ROOM = "ADD_ROOM";

export function AddRoom(payload) {
  return {
    type: ADD_ROOM,
    payload
  };
}

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
