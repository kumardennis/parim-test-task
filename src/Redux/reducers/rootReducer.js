import holidayReducer from './holidayReducer';
import weekNumberReducer from './weekNumberReducer';
import startDayReducer from './startDayReducer';
import currentDateReducer from './currentDateReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  weekNumberReducer,
  holidayReducer,
  startDayReducer,
  currentDateReducer,
});

export default rootReducer;
