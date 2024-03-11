import React, { useEffect, useState } from "react";

export default function OlderHeart() {
  const [elapsedTime, setElapsedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateElapsedTime = () => {
    const startDateTime = new Date("2024-02-01T09:10:10").getTime();
    const now = new Date().getTime();
    const timeDifference = moment.duration(now - startDateTime, "milliseconds");

    setElapsedTime({
      days: timeDifference.days(),
      hours: timeDifference.hours(),
      minutes: timeDifference.minutes(),
      seconds: timeDifference.seconds(),
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateElapsedTime();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='App'>
      <h1 className='title'>
        识于2024.2.01，已过去
        {`${elapsedTime.days}天 ${elapsedTime.hours}时${elapsedTime.minutes}分${elapsedTime.seconds}秒`}
      </h1>
      <div className='content'>
        {[...Array(8)].map((_, index) => (
          <div key={index} className='box'></div>
        ))}
      </div>
    </div>
  );
}
