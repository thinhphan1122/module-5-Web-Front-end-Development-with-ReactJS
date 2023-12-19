import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          alert("Time's up!");
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{timer}</div>;
};

export default Timer;
