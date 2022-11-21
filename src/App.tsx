import { useEffect, useLayoutEffect, useState } from "react";
import "./App.less";
import moment from "moment";
function App() {
  const [day, setDay] = useState(0);
  const [hour, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const getDay = () => {
    const day = new Date("2022-11-7 9:10:10").getTime();
    const now = new Date().getTime();
    const x = now - day;
    var time = moment.duration(x, "milliseconds");
    let myday = time.days();
    let hours = time.hours();
    let minutes = time.minutes();
    let seconds = time.seconds();
    console.log(myday, hours, minutes, seconds);
    setDay(myday);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
    // moment(now).diff(moment(day1), "days");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getDay();
    }, 1000);
    return () => {
      timer;
    };
  }, []);
  return (
    <div className="App">
      <h1 className="title">
        识于2022.11.07,已过去{`${day}天 ${hour}时${minutes}分${seconds}秒`}
      </h1>
      <div className="content">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default App;
