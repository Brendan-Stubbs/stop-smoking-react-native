import moment, { Moment } from "moment";
import { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { TimerDisplay } from "./TimerDisplay";

export const StopWatch = (props: { lastSmoked: Moment }) => {
  const calculateTimeSinceLastSmoked = () => {
    const now = moment();
    return now.diff(props.lastSmoked);
  };

  const [timer, setTimer] = useState(calculateTimeSinceLastSmoked());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(calculateTimeSinceLastSmoked());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <View>
      <TimerDisplay timer={timer} caption="Time since last smoked" />
    </View>
  );
};
