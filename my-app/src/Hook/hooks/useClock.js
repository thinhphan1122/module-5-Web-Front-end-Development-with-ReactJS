import { useState } from "react";

export default function useClock() {
  const [time, setTime] = useState("");
  const [ampm, setampm] = useState("");

  //Time-update function
  const updateTime = function () {
    let dateInfo = new Date();
    let hour = 0;

    /*Get the hour value*/
    if (dateInfo.getHours() === 0) {
      hour = 12;
    } else if (dateInfo.getHours() > 12) {
      hour = dateInfo.getHours() - 12;
    } else {
      hour = dateInfo.getHours();
    }

    /*Get the minute value*/
    let minutes =
      dateInfo.getMinutes() < 10
        ? parseInt("0" + dateInfo.getMinutes())
        : dateInfo.getMinutes();

    /*Get the second value*/
    let seconds =
      dateInfo.getMinutes() < 10
        ? "0" + dateInfo.getSeconds()
        : dateInfo.getSeconds();

    /*Date format*/
    let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

    /*Update state*/
    setampm(ampm);
    setTime(`${hour}:${minutes}:${seconds}`);
  };

  setInterval(function () {
    updateTime();
  }, 1000);

  return [time, ampm];
}
