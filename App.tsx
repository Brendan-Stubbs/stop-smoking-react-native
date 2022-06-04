import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import useFonts from "./hooks/useFonts";
import * as SplashScreen from "expo-splash-screen";
import { Moment, utc as moment } from "moment";
import {
  getTodaysCigarettes,
  loadLastSmoked,
  loadMaxCigs,
  loadTimer,
} from "./utils/local-storage-helper";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./Navigator";
import AppContextProvider from "./store/context/app-context";

const App = () => {
  const [IsReady, SetIsReady] = useState(false);
  const [lastSmoked, setLastSmoked] = useState<Moment | undefined>();
  const [smokedToday, setSmokedToday] = useState(0);
  const [timer, setTimer] = useState({ minutes: 0, hours: 1 });
  const [maxCigs, setMaxCigs] = useState(10);

  const LoadApp = async () => {
    await useFonts();
    setLastSmoked(await loadLastSmoked());
    setSmokedToday((await getTodaysCigarettes()).length);
    setMaxCigs(await loadMaxCigs());

    const loadedTimer = await loadTimer();
    if (loadedTimer) {
      setTimer(loadedTimer);
    }
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
        <AppContextProvider
          defaultValues={{ lastSmoked, smokedToday, timer, maxCigs }}
        >
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
