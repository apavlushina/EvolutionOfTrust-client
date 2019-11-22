import request from "superagent";
const baseUrl = "http://localhost:4000";

export const decision = (jwt, decision) => () => {
  // console.log("cheat dispatch test");

  request
    .put(`${baseUrl}/status`)
    .set("Authorization", `Bearer ${jwt}`) // must set auth header to send jwt in every auth action
    .send({ jwt, decision })
    .catch(console.error);
};

export const endgame = jwt => {
  request
    .put(`${baseUrl}/endgame`)
    .set("Authorization", `Bearer ${jwt}`) // must set auth header to send jwt in every auth action
    .catch(console.error);
};
