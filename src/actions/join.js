import request from "superagent";
export const JOIN = "JOIN";
const baseUrl = "http://localhost:4000";
function doJoin(payload) {
  return {
    type: JOIN,
    payload: payload
  };
}
// export const join = (jwt, roomName) => dispatch => {
//   //   console.log("dispatch test");

//   request
//     .put(`${baseUrl}/users/${jwt}`)
//     .send({ roomName })
//     .then(response => {
//       console.log("response", response);
//       const action = doJoin(response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// };

export const join = (jwt, roomName) => dispatch => {
  //   console.log("dispatch test");

  request
    .put(`${baseUrl}/users/join`)
    .send({ jwt, roomName })
    .then(response => {
      //   console.log("response", response);
      const action = doJoin(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
