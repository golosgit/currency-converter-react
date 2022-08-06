import { useCurrentDate } from "./useCurrentDate.js";
import { ActualDate } from "./styled.js";

const formatDate = (date) =>
  date.toLocaleDateString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    minute: "numeric",
    hour: "numeric",
    second: "numeric",
  });

export const DateTime = () => {
  const date = useCurrentDate();

  return <ActualDate>{formatDate(date)}</ActualDate>;
};
