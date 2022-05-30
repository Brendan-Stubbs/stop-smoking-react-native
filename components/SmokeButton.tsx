import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../constants/colors";

interface Props {
  onPress: () => void;
  isSafe: boolean;
}

export const SmokeButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={getStyles(props.isSafe).outerCircle}>
        <View style={getStyles(props.isSafe).innerRing}>
          <View style={getStyles(props.isSafe).innerCircle}>
            <Image
              style={getStyles(props.isSafe).cigImage}
              source={require("../assets/images/cig2.png")}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (isSafe: boolean) =>
  StyleSheet.create({
    outerCircle: {
      width: 150,
      height: 150,
      backgroundColor: isSafe ? colors.success : colors.warning,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    innerRing: {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: isSafe
        ? colors.innerButtonSuccess
        : colors.innerButtonWarning,
      alignItems: "center",
      justifyContent: "center",
    },
    innerCircle: {
      width: 60,
      height: 60,
      backgroundColor: isSafe ? colors.success : colors.warning,
      // backgroundColor: "white",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    cigImage: {
      width: "50%",
      resizeMode: "center",
    },
  });
