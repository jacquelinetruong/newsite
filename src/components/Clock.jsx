import React, { useState, useEffect } from "react";

export const Clock = () => {
  var [date, setDate] = useState(new Date());

  const getTimezone = (date) => {
    const options = { timeZone: 'America/New_York', timeZoneName: 'short' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    const timezoneName = parts.find(part => part.type === 'timeZoneName');
    return timezoneName ? timezoneName.value : '';
  };

  const getTime = (date) => {
    const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
  };

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time">
      <p>{getTime(date).toLocaleUpperCase()}</p>
      <p>{getTimezone(date)}</p>
    </div>
  );
};

export default Clock;