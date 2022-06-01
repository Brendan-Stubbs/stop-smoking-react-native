import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { AppContext } from "../store/context/app-context";
import { saveMaxCigs } from "../utils/local-storage-helper";
import { Incrementor } from "./Incrementor";
import { StyledButton } from "./StyledButton";

export const MaxCigSetter = () => {
  const { maxCigs, setMaxCigs } = useContext(AppContext);
  const [selectedMaxCigs, setSelectedMaxCigs] = useState(maxCigs);

  const handleSave = async () => {
    setMaxCigs(selectedMaxCigs);
    await saveMaxCigs(selectedMaxCigs);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Incrementor
            unitType="Daily Cigarettes"
            value={selectedMaxCigs}
            setValue={setSelectedMaxCigs}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton label="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    width: "50%",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
