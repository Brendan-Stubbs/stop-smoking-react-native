import React from "react";
import { Pressable, View, Image, StyleSheet, Linking } from "react-native";

const loadInBrowser = () => {
  Linking.openURL("https://www.buymeacoffee.com/brendan_stubbs");
};

export const BuyMeACoffee = () => {
  return (
    <Pressable onPress={loadInBrowser}>
      <Image
        style={styles.image}
        source={require("../assets/images/buy-coffee-button.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: 60,
    resizeMode: "contain",
  },
});
