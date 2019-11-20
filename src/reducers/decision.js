export default function(state = "", action = {}) {
  switch (action.type) {
    case "UPD":
      return action.payload;
    default:
      return state;
  }
}
