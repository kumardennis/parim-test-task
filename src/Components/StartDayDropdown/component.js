import React, {useState, useEffect} from 'react';
import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon} from 'mdbreact';
import {useSelector, useDispatch} from 'react-redux';
import {updateStartDayOfWeek, updateCurrentDate} from 'Redux/actions/index';
import moment from 'moment';

import './style.scss';

const StartDayDropwdown = () => {
  const storageDateFormat = window !== undefined && window.$storageDateFormat; //Global Variable

  const [prevStartDay, setPrevStartDay] = useState(null);

  const startDay = useSelector((state) => state.startDayReducer);

  const currentDate = useSelector((state) => state.currentDateReducer.currentDate);

  const dispatch = useDispatch();

  const weekDayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  useEffect(() => {
    const stepsToMove = weekDayNames.indexOf(startDay) - weekDayNames.indexOf(prevStartDay);

    if (prevStartDay !== null) {
      const newDate =
        stepsToMove < 0
          ? moment(currentDate).subtract(Math.abs(stepsToMove), 'days').format(storageDateFormat)
          : moment(currentDate).add(stepsToMove, 'days').format(storageDateFormat);

      dispatch(updateCurrentDate(newDate));
    }
  }, [prevStartDay]);

  return (
    <div className='start-day-dropdown'>
      <span>Choose the starting day of the week</span>
      <MDBDropdown>
        <MDBDropdownToggle caret color='primary'>
          {startDay}
        </MDBDropdownToggle>
        <MDBDropdownMenu right basic>
          {weekDayNames.map((weekday, key) => {
            return (
              <MDBDropdownItem
                key={key}
                onClick={() => {
                  setPrevStartDay(startDay);
                  dispatch(updateStartDayOfWeek(weekday));
                }}
              >
                {weekday === 'Saturday' || weekday === 'Sunday' ? (
                  <>
                    {weekday} <MDBIcon far icon='grin-stars' />
                  </>
                ) : (
                  weekday
                )}
              </MDBDropdownItem>
            );
          })}
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default StartDayDropwdown;
