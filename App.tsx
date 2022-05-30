import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { HomeScreen } from "./Screens/HomeScreen";
import useFonts from "./hooks/useFonts";
import * as SplashScreen from "expo-splash-screen";
import { Moment, utc as moment } from "moment";
import {
  getTodaysCigarettes,
  loadLastSmoked,
} from "./utils/local-storage-helper";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./Navigator";
import AppContextProvider from "./store/context/app-context";

const App = () => {
  const [IsReady, SetIsReady] = useState(false);
  const [lastSmoked, setLastSmoked] = useState<Moment | undefined>();
  const [smokedToday, setSmokedToday] = useState(0);

  const LoadApp = async () => {
    await useFonts();
    setLastSmoked(await loadLastSmoked());
    setSmokedToday((await getTodaysCigarettes()).length);
  };

  if (!IsReady) {
    SplashScreen.preventAutoHideAsync();
    LoadApp().then(() => SetIsReady(true));
    return <></>;
  } else {
    SplashScreen.hideAsync();
    return (
      <>
        <StatusBar style="dark" />
        <AppContextProvider defaultValues={{ lastSmoked, smokedToday }}>
          <NavigationContainer>
            <BottomTabNavigator
              smokedToday={smokedToday}
              setSmokedToday={setSmokedToday}
            />
          </NavigationContainer>
        </AppContextProvider>
      </>
    );
  }
};

export default App;
