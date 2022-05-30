import * as Font from "expo-font";

const useFonts = async () => {
  await Font.loadAsync({
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
  });
};

export default useFonts;
