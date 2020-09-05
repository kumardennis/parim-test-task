const weekNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_WEEK_OF_YEAR':
      return action.payload;
    default:
      return state;
  }
};

export default weekNumberReducer;
