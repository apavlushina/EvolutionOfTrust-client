export default function(state = [], action = {}) {
  switch (action.type) {
    case "DECISION":
      console.log("decision reducer!");
      return [...state, action.payload];
    default:
      return state;
  }
}
