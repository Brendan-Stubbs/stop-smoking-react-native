import moment, { Moment } from "moment";

export const isTimeSafe = (params: {
  lastSmoked?: Moment;
  timer: { minutes: number; hours: number };
}) => {
  const { lastSmoked, timer } = params;
  if (!lastSmoked) {
    return true;
  }

  const { minutes, hours } = timer;
  const now = moment();

  return lastSmoked < now.subtract(minutes, "minutes").subtract(hours, "hours");
};

export const getTimeSinceLastSmoked = (lastSmoked?: Moment) => {
  if (!lastSmoked) {
    return { hours: 0, minutes: 0 };
  }
  const minutes = lastSmoked ? moment().diff(lastSmoked, "minutes") : 0;
  const hours = Math.floor(minutes / 60);

  return { minutes: minutes % 60, hours };
};

export const toTimerString = (params: {
  days: number;
  hours: number;
  minutes: number;
}) => {
  const { days, hours, minutes } = params;
  const daysString = days.toLocaleString("en", { minimumIntegerDigits: 2 });
  const minuteString = minutes.toLocaleString("en", {
    minimumIntegerDigits: 2,
  });
  const hourString = hours.toLocaleString("en", { minimumIntegerDigits: 2 });

  return `${daysString} : ${hourString} : ${minuteString}`;
};
