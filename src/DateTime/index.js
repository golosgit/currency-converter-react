import { useEffect, useState } from "react";
import "./style.css";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <p className="dateAndTime"> 
      {date.toLocaleDateString("pl-PL", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </p>
  );
};

export default DateTime;
