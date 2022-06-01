import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Incrementor } from "./Incrementor";
import { AppContext } from "../store/context/app-context";
import { StyledButton } from "./StyledButton";
import { saveTimer } from "../utils/local-storage-helper";

export const TimeSetter = () => {
  const { setTimer, timer } = useContext(AppContext);

  const [minutes, setMinutes] = useState(timer.minutes);
  const [hours, setHours] = useState(timer.hours);

  const handleSave = async () => {
    setTimer({ minutes, hours });
    await saveTimer({ minutes, hours });
  };

  return (
    <View>
      <View style={styles.container}>
        <Incrementor unitType="Hours" value={hours} setValue={setHours} />
        <Incrementor
          unitType="Minutes"
          value={minutes}
          setValue={setMinutes}
          max={60}
        />
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
    justifyContent: "space-around",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
