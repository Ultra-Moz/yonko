import React, { useState, useEffect } from 'react';

const BasedIn = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };
    return date.toLocaleTimeString('en-US', options);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    });
  };

  const formattedTime = formatTime(time);
  const [hours, minutes, secondsWithPeriod] = formattedTime.split(':');
  const [seconds, period] = secondsWithPeriod.split(' ');

  return (
    <div className='tile flex flex-col justify-between'>
      <h3 className='text-grayColor'>Based In:</h3>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <span className='text-white font-semibold'>Hyd, IND <span className='text-orange'>•</span> IST</span>
          <span className='text-grayColor'>{formatDate(time)}</span>
          <span className='text-white mt-6'>
            {hours}:{minutes}:<span className='text-orange'>{seconds}</span> {period}
          </span>
        </div>
        <img src="/images/map.svg" alt="Telengana state map" />
      </div>
    </div>
  );
}

export default BasedIn;