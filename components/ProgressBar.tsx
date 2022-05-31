import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";

interface Props {
  total: number;
  completed: number;
}

export const ProgressBar = (props: Props) => {
  const { total, completed } = props;
  const percentage = total !== 0 ? (completed / total) * 100 : 0;

  return (
    <>
      <Text style={getStyles(percentage).info}>Cigarettes Smoked Today: 5</Text>
      <View style={getStyles(percentage).total}>
        <View style={getStyles(percentage).completed} />
      </View>
    </>
  );
};

const getStyles = (percentage: number) => {
  return StyleSheet.create({
    total: {
      height: 12,
      width: "100%",
      backgroundColor: colors.success,
      borderRadiusRight: 10,
    },
    completed: {
      width: `${percentage}%`,
      backgroundColor: colors.warning,
      height: 12,
    },
    info: {
      fontSize: 15,
      marginBottom: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
};
