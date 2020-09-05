const addDateToLocalStore = (dateObj) => {
  return {
    type: 'ADD_DATE_TO_LOCAL_STORE',
    payload: dateObj,
  };
};

const updateWeekOfYear = (newWeek) => {
  return {
    type: 'UPDATE_WEEK_OF_YEAR',
    payload: newWeek,
  };
};

const updateStartDayOfWeek = (newStartDay) => {
  return {
    type: 'UPDATE_START_DAY_OF_WEEK',
    payload: newStartDay,
  };
};

const updateCurrentDate = (newCurrentDate) => {
  return {
    type: 'UPDATE_CURRENT_DATE',
    payload: newCurrentDate,
  };
};
export {addDateToLocalStore, updateWeekOfYear, updateStartDayOfWeek, updateCurrentDate};
