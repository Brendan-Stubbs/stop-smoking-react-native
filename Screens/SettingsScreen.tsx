import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TimeSetter } from "../components/TimeSetter";
import { colors } from "../constants/colors";

export const SettingsScreen = () => (
  <View style={styles.container}>
    <TimeSetter />
    <Text style={styles.info}>
      What is your goal time between cigarettes? This will be used in the
      countdown timer and when it is safe to smoke again the button will turn
      green
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  info: {
    fontSize: 13,
  },
});
