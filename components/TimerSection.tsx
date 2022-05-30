import { Moment } from "moment";
import React from "react";
import { View, Text } from "react-native";
import { CountDownTimer } from "./timers/CountDownTimer";
import { StopWatch } from "./timers/StopWatch";

interface Props {
  isSafe: boolean;
  lastSmoked?: Moment;
  setIsSafe: (v: boolean) => void;
  timer: { minutes: number; hours: number };
}

export const TimerSection = (props: Props) => {
  const { lastSmoked, setIsSafe, isSafe, timer } = props;
  return (
    <View>
      {lastSmoked ? (
        !isSafe ? (
          <CountDownTimer
            onExpire={setIsSafe}
            duration={timer}
            lastSmoked={lastSmoked}
          />
        ) : (
          <StopWatch lastSmoked={lastSmoked} />
        )
      ) : (
        <Text>Hit the button when you smoke a cigarette</Text>
      )}
    </View>
  );
};
