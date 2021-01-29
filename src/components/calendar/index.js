import { CalendarToday } from '@material-ui/icons';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './index.css'



const CalendarComp = () => {
  const [value, onChange] = useState(new Date());

  return (
      <Calendar
        onChange={onChange}
        value={value}
      />
  );
}
export default CalendarComp;