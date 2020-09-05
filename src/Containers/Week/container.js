import React, {useEffect, useState, useRef} from 'react';
import Day from 'Components/Day/component';
import WeekNumber from 'Components/WeekNumber/component';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {addDateToLocalStore} from 'Redux/actions/index';
import './style.scss';

const Week = () => {
  const storageDateFormat = window !== undefined && window.$storageDateFormat;

  const dispatch = useDispatch();

  /*-------------------CUSTOM HOOK TO DETECT STATE CHANGE------- */
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  /*-------------NECESSITIES TO FETCH API DATA-------------*/
  const startDate = useSelector((state) => state.currentDateReducer.currentDate);
  let prevStartDate = usePrevious(startDate);

  const endDate = moment(startDate).add(7, 'days').format(storageDateFormat);
  const APIendpoint = `/api/holidays?`;
  const requestData = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    startDate,
    endDate,
  };

  // const locallyStoredStartDate = useSelector((state) => state.holidayReducer[startDate]);
  // const locallyStoredEndDate = useSelector((state) => state.holidayReducer[endDate]);

  /*-------------FUNCTIONS TO MAP LOCAL GENERATED DATES WITH API HOLIDAYS-----TO GET CONSISTENT DATA PRODUCT-----------*/
  const [mappedHolidays, setMappedHolidays] = useState({});
  const prevMappedHolidays = usePrevious(mappedHolidays);

  const enumerateBetweenDates = () => {
    let enumStartDate = startDate;
    let enumEndDate = endDate;

    const dates = [];

    while (moment(enumStartDate).isBefore(enumEndDate, 'day')) {
      dates.push(moment(enumStartDate).format(storageDateFormat));
      enumStartDate = moment(enumStartDate).add(1, 'days');
    }
    return dates;
  };

  const mapDatesToHolidays = (enumerateBetweenDates, holidaysFromApi) => {
    const mappedDatesAndHolidays = {};

    enumerateBetweenDates().forEach((date) => {
      mappedDatesAndHolidays[date] =
        holidaysFromApi[date] !== undefined
          ? holidaysFromApi[date]
          : [{name: 'No events!', type: 'no events'}];
    });

    return mappedDatesAndHolidays;
  };

  /*-----------------------FETCH API ON STATE CHANGE AND CALL ABOVE FUNCTIONS TO GET SIMILAR DATA PRODUCT AS FROM API--------------------- */

  useEffect(() => {
    if (prevStartDate !== startDate || startDate === moment().format(storageDateFormat)) {
      fetch(APIendpoint, {
        method: 'POST',
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => setMappedHolidays(mapDatesToHolidays(enumerateBetweenDates, data.holidays)))
        .then(() => dispatch(addDateToLocalStore(mappedHolidays)))
        .catch((err) => console.log('error', err));
    }
  });

  return (
    <div className='week-container'>
      <div className='week-number'>
        <WeekNumber weekNumber={moment(startDate).week()} />
      </div>
      <div className='week'>
        {prevMappedHolidays !== mappedHolidays ? (
          Object.keys(mappedHolidays).map((date, key) => {
            return (
              <Day
                key={key}
                dayDate={moment(date).format('ddd, DD-MM-YYYY')}
                events={mappedHolidays[date]}
              />
            );
          })
        ) : (
          <div>
            <div className='spinner-grow text-success fast lg-5' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
            <div className='spinner-grow text-success medium lg-5' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
            <div className='spinner-grow text-success slow lg-5' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Week;
