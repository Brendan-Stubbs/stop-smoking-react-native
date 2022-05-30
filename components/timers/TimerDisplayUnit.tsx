import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  unit: number;
  type: string;
  hideDelimiter?: boolean;
}

const addTrailingZero = (num: number) =>
  num < 10 ? "0" + num : num.toString();

export const TimerDisplayUnit = (props: Props) => (
  <View style={styles.unitContainer}>
    <View>
      <Text style={styles.unit}>{addTrailingZero(props.unit)}</Text>
      <Text style={styles.unitText}>{props.type}</Text>
    </View>
    {!props.hideDelimiter && <Text style={styles.delimiter}> : </Text>}
  </View>
);

const styles = StyleSheet.create({
  unitContainer: {
    flexDirection: "row",
  },
  unit: {
    fontSize: 25,
    paddingHorizontal: 10,
    textAlign: "center",
    color: "white",
  },
  unitText: {
    fontSize: 7,
    textAlign: "center",
    color: "#133aeb",
  },
  delimiter: {
    fontSize: 25,
    fontWeight: "900",
    color: "#133aeb",
  },
});
