export default function(state = "", action = {}) {
  switch (action.type) {
    case "SHOW_ROOMS":
      return { rooms: action.payload, value: "" };
    case "NEW_ROOM":
      return { rooms: [action.payload, ...state], value: "" };
    default:
      return state;
  }
}
