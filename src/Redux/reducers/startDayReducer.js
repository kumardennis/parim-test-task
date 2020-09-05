import moment from 'moment';

const startDayReducer = (state = moment().format('dddd'), action) => {
  switch (action.type) {
    case 'UPDATE_START_DAY_OF_WEEK':
      return action.payload;
    default:
      return state;
  }
};

export default startDayReducer;
