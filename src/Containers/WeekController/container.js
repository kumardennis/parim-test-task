import React from 'react';
import WeekButton from 'Components/WeekButton/component';
import {MDBIcon} from 'mdbreact';

const WeekController = () => {
  return (
    <div>
      <WeekButton label='Previous Week'>
        <MDBIcon icon='arrow-left' />
      </WeekButton>
      <WeekButton label='Next Week'>
        <MDBIcon icon='arrow-right' />
      </WeekButton>
    </div>
  );
};

export default WeekController;
