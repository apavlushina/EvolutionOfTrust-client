import request from "superagent";
import { url } from "../constants";

export const createRoom = (name, jwt) => {
  // console.log("create room test", name);
  request
    .post(`${url}/room`)
    .set("Authorization", `Bearer ${jwt}`) // must set auth header to send jwt in every auth action
    .send({ name }) // the send ALWAYS takes an object, which will be the body of the request -> message="value"
    .catch(console.error);
};
