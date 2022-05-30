import { Moment, utc as moment } from "moment";
import { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { TimerDisplay } from "./TimerDisplay";

interface Props {
  lastSmoked: Moment;
  duration: { hours: number; minutes: number };
  onExpire: (v: boolean) => void;
}

export const CountDownTimer = (props: Props) => {
  const { lastSmoked, duration } = props;
  const { hours, minutes } = duration;

  const calculateTimeRemaining = () => {
    const now = moment();
    const timeCanSmoke = moment(lastSmoked)
      .add(minutes, "minutes")
      .add(hours, "hours");

    const remainingTime = timeCanSmoke.diff(now);
    return remainingTime;
  };

  const [remaining, setRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remaining < 1000) {
        clearInterval(intervalId);
        props.onExpire(true);
      } else {
        setRemaining(calculateTimeRemaining());
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <View>
      <TimerDisplay timer={remaining} caption="Time till next cigarette" />
    </View>
  );
};
