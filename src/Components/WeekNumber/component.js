import React from 'react';
import {MDBCard, MDBCardBody, MDBContainer} from 'mdbreact';

const WeekNumber = ({weekNumber}) => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          Week: <span style={{fontSize: '40px'}}>{weekNumber}</span>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default WeekNumber;
