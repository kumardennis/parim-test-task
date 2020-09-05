import moment from 'moment';

const initState = {
  currentDate: moment().format('YYYY-MM-DD'),
  prevDate: null,
};

const currentDateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_DATE':
      return {
        ...state,
        prevDate: state.currentDate,
        currentDate: action.payload,
      };
    default:
      return state;
  }
};

export default currentDateReducer;
