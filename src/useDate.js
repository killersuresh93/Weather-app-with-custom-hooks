import { useState, useEffect } from 'react';

function useDate(d) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = d.getDate();
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return [date, day, month, year];

  return [data, error];
}
export default useDate;
