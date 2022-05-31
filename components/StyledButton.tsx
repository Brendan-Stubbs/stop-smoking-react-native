import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  onPress: () => void;
}

export const StyledButton = (props: Props) => {
  const [saveFeedback, setSaveFeedback] = useState(false);

  const handleSave = () => {
    setSaveFeedback(true);
    props.onPress();
    setTimeout(() => setSaveFeedback(false), 1000);
  };

  return (
    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
      <Text style={styles.text}>
        {saveFeedback ? <Ionicons name="thumbs-up" size={20} /> : props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: "center",
  },
  saveButton: {
    margin: 20,
    width: 120,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
