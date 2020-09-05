const initState = {};

const holidayReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DATE_TO_LOCAL_STORE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default holidayReducer;
