export default function(state = [], action = {}) {
  switch (action.type) {
    case "SHOW_ROOMS":
      return action.payload.reverse();
    case "ADD_ROOM":
      return [action.payload, ...state];
    default:
      return state;
  }
}
