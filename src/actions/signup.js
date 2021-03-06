import request from "superagent";
export const LOGIN = "LOGIN";
const baseUrl = "http://localhost:4000";

function doLogin(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export const signup = (name, email, password) => dispatch => {
  //   console.log("dispatch test");

  request
    .post(`${baseUrl}/users`)
    .send({ name, email, password })
    .then(response => {
      //   console.log(response.text);
      const action = doLogin(response.text);
      dispatch(action);
    })
    .catch(console.error);
};
