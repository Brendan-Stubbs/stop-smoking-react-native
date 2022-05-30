import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>Settings screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { backgroundColor: colors.backgroundColor, flex: 1 },
});
