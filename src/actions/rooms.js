import request from "superagent";
import { url } from "../constants";

export const SHOW_ROOMS = "SHOW_ROOMS";

export function showRooms(payload) {
  console.log("show room action test", payload);
  return {
    type: SHOW_ROOMS,
    payload
  };
}

export const ADD_ROOM = "ADD_ROOM";

export function addRoom(payload) {
  console.log("add room action test", payload);
  return {
    type: ADD_ROOM,
    payload
  };
}

// export const NEW_ROOM = "NEW_ROOM";

// function newRoom(payload) {
//   return {
//     type: NEW_ROOM,
//     payload
//   };
// }

export const createRoom = name => dispatch => {
  console.log("create room test", name);
  request
    .post(`${url}/room`)
    .send({ name }) // the send ALWAYS takes an object, which will be the body of the request -> message="value"
    .then(response => {
      console.log(response);
    })
    .catch(console.error);
};
