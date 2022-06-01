import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaxCigSetter } from "../components/MaxCigSetter";
import { TimeSetter } from "../components/TimeSetter";
import { colors } from "../constants/colors";

export const SettingsScreen = () => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.info}>
        What is your goal time between cigarettes? This will be used in the
        countdown timer and when it is safe to smoke again the button will turn
        green.
      </Text>
      <TimeSetter />
    </View>

    <View style={styles.section}>
      <Text style={styles.info}>
        Set your goal amount of cigarettes per day.
      </Text>
      <MaxCigSetter />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  info: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  section: {
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
});
