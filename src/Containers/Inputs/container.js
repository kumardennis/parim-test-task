import React from 'react';
import WeekController from 'Containers/WeekController/container';
import StartDayDropwdown from 'Components/StartDayDropdown/component';

import './style.scss';

const Inputs = () => {
  return (
    <div className='inputs-container'>
      <WeekController />
      <StartDayDropwdown />
    </div>
  );
};

export default Inputs;
