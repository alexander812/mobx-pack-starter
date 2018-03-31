import React from 'react';

const Timer = ({ time }) => (
  <div>
    время: {new Date(time).toTimeString()}
  </div>
);


export default Timer;

