import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

interface Props {
  unitType: string;
  value: number;
  setValue: (v: number) => void;
  max?: number;
}

export const Incrementor = (props: Props) => {
  const { max } = props;

  const handleIncrement = () => {
    const newValue = props.value + 1;
    if ((max && newValue < max) || !max) {
      props.setValue(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = props.value - 1;
    if (newValue >= 0) {
      props.setValue(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.text}>{props.unitType}</Text>
        <Text style={styles.numberText}>{props.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Ionicons name="add" color="black" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="remove"
            color="black"
            size={30}
            onPress={handleDecrement}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: colors.navColor,
    flex: 2,
    marginHorizontal: 10,
  },
  valueContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "white",
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  text: { color: "white" },
  numberText: {
    fontSize: 30,
    color: "white",
  },
  operator: {
    fontSize: 20,
  },
});
