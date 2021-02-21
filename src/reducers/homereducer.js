
const initialState = {usersData:[]};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "SET USER NAMES":
      return{
        ...state,
        usersData:action.data
      }

    default:return {
      ...state
    }
  }
};

export default reducer;