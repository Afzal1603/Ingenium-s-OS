import React, { useEffect, useState } from "react";

const DateNow = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      return clearInterval(interval);
    }, 1000);
  }, [time]);
  return <div className="text-white">{time.toDateString()}</div>;
};

export default DateNow;
