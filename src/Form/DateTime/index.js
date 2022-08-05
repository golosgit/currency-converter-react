import { useEffect, useState } from "react";
import { ActualDate } from "./styled.js";

const formatDate = (date) =>
  date.toLocaleDateString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <ActualDate>{formatDate(date)}</ActualDate>;
};