const initState = {
  '2019-02-02': [
    {
      name: 'Küünlapäev ehk pudrupäev',
      type: 'folk',
    },
  ],
  '2019-02-09': [
    {
      name: 'Luuvalupäev',
      type: 'folk',
    },
  ],
  '2019-02-22': [
    {
      name: 'Talvine peetripäev',
      type: 'folk',
    },
  ],
  '2019-02-24': [
    {
      name: 'Iseseisvuspäev',
      type: 'public',
    },
    {
      name: 'Talvine madisepäev',
      type: 'folk',
    },
  ],
};

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
