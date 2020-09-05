import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Day = ({dayDate, events}) => {
  return (
    <div className='day'>
      <div className='day-date'>
        <span>{dayDate}</span>
      </div>
      <div className='day-events'>
        <ul>
          {events.map((event, key) => {
            if (event.type === 'no events') return <span className='no-events'>{event.name}</span>;
            return (
              <div
                className={
                  event.type === 'folk'
                    ? 'folk-event-item event-item-container'
                    : 'public-event-item event-item-container'
                }
              >
                <li key={key}>{event.name}</li>
                <span>{event.type} holiday</span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Day;

Day.propTypes = {
  dayDate: PropTypes.string,
  events: PropTypes.array,
};
