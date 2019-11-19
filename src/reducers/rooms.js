export default function(state = [], action = {}) {
  switch (action.type) {
    case "ROOMS":
      return action.payload.reverse();
    case "ROOM":
      return [action.payload, ...state];
    default:
      return state;
  }
}
