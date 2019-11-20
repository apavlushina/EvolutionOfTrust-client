import request from "superagent";
import { url } from "../constants";

// export const SHOW_ROOMS = "SHOW_ROOMS";

// export function showRooms(payload) {
//   // this action can be done in the backend in the stream endpoint
//   // console.log("show room action test", payload);
//   return {
//     type: SHOW_ROOMS,
//     payload
//   };
// }

// export const ADD_ROOM = "ADD_ROOM";

// export function addRoom(payload) {
//   // console.log("add room action test", payload);
//   return {
//     type: ADD_ROOM,
//     payload
//   };
// }

// export const NEW_ROOM = "NEW_ROOM";

// function newRoom(payload) {
//   return {
//     type: NEW_ROOM,
//     payload
//   };
// }

export const createRoom = (name, jwt) => {
  // console.log("create room test", name);
  request
    .post(`${url}/room`)
    .set("Authorization", `Bearer ${jwt}`) // must set auth header to send jwt in every auth action
    .send({ name }) // the send ALWAYS takes an object, which will be the body of the request -> message="value"
    .catch(console.error);
};

export const decision = (jwt, decision) => () => {
  console.log("action test", decision);
  request
    .put(`${url}/status`)
    .set("Authorization", `Bearer ${jwt}`)
    .send({ jwt, decision })
    .catch(console.error);
};
