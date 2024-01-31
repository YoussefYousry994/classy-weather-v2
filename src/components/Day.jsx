import React from 'react';
import { formatDay } from '../App-v2';
import { getWeatherIcon } from '../App-v2';
class Day extends React.Component {
  render() {
    const { date, max, min, code, isToday } = this.props;
    return (
      <li className='day'>
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? 'today' : formatDay(date)}</p>
        <p>
          {Math.floor(min)} &deg; &mdash;{' '}
          <strong>{Math.ceil(max)} &deg;</strong>
        </p>
      </li>
    );
  }
}

export default Day;
