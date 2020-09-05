import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {updateCurrentDate} from 'Redux/actions/index';
import './style.scss';

const WeekButton = ({label, children}) => {
  const storageDateFormat = window !== undefined && window.$storageDateFormat;

  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.currentDateReducer.currentDate);

  const handleNavigation = (event) => {
    event.preventDefault();

    // CHANGE THE DAMN FUCKNG STATE!!!!

    const updatedCurrentDate =
      label === 'Next Week'
        ? moment(currentDate).add(7, 'days').format(storageDateFormat)
        : moment(currentDate).subtract(7, 'days').format(storageDateFormat);

    dispatch(updateCurrentDate(updatedCurrentDate));
  };

  return (
    <button onClick={handleNavigation} className='btn btn-week'>
      {label === 'Previous Week' && children}
      {label}
      {label === 'Next Week' && children}
    </button>
  );
};

WeekButton.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

WeekButton.defaultProps = {
  label: 'insert label',
  children: ``,
};

export default WeekButton;
