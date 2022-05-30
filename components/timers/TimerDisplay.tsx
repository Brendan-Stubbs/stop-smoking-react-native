import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { TimerDisplayUnit } from "./TimerDisplayUnit";

export const TimerDisplay = (props: { timer: number; caption: string }) => {
  const { timer } = props;

  const totalSeconds = Math.floor(timer / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 6000);

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>{props.caption}</Text>
      <View style={styles.timerContainer}>
        <TimerDisplayUnit unit={hours} type="HOURS" />
        <TimerDisplayUnit unit={minutes} type="MINUTES" />
        <TimerDisplayUnit unit={seconds} type="SECONDS" hideDelimiter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  caption: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    backgroundColor: colors.secondary,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 20,
  },
});
