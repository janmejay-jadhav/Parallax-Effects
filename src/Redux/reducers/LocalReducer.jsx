const items =
  localStorage.getItem("tableData") != null
    ? JSON.parse(localStorage.getItem("tableData"))
    : [];

let initialState = {
  local: items,
};

let LocalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addData":
      return {
        local: [
          ...state.local,
          localStorage.setItem("tableData", JSON.stringify(action.payload)),
        ],
      };
    default:
      return state;
  }
};

export default LocalReducer;
