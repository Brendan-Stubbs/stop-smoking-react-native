import moment from "moment";
import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { colors } from "../constants/colors";
import { isTimeSafe } from "../utils/date-helper";
import { SmokeButton } from "../components/SmokeButton";
import { usePromise } from "../hooks/usePromise";
import { TimerSection } from "../components/TimerSection";
import { logCigarette } from "../utils/local-storage-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../store/context/app-context";
import { ProgressBar } from "../components/ProgressBar";
import { AdMobBanner } from "expo-ads-admob";
import { getBannerId, ScreenNames } from "../utils/banner-helper";

export const HomeScreen = () => {
  const bannerId = getBannerId({ test: false, screen: ScreenNames.homeScreen });

  const {
    lastSmoked,
    setLastSmoked,
    smokedToday,
    setSmokedToday,
    timer,
    maxCigs,
  } = useContext(AppContext);

  const hasCountdownExpired = isTimeSafe({
    lastSmoked,
    timer,
  });

  const [isSafe, setIsSafe] = useState(hasCountdownExpired);

  usePromise(async () => {
    setIsSafe(isTimeSafe({ lastSmoked, timer }));
    if (lastSmoked) {
      await AsyncStorage.setItem("lastSmoked", lastSmoked.format());
    }
  }, [lastSmoked]);

  const smokeCigarette = async () => {
    const now = moment();
    setLastSmoked(now);
    await logCigarette(now, setSmokedToday);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>Smokedown Timer</Text>
      <View style={styles.body}>
        <View style={styles.progressContainer}>
          <ProgressBar completed={smokedToday} total={maxCigs} />
        </View>
        <View style={styles.counterContainer}>
          <TimerSection
            isSafe={isSafe}
            setIsSafe={setIsSafe}
            timer={timer}
            lastSmoked={lastSmoked}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SmokeButton isSafe={isSafe} onPress={smokeCigarette} />
        </View>
      </View>
      {/* Ad container */}

      <View style={styles.adContainer}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={bannerId}
          servePersonalizedAds={false}
        />
      </View>

      {/* End Ad container */}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    // paddingTop: 50,
    flex: 1,
    // backgroundColor: colors.background,
  },
  header: {
    paddingVertical: 20,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Pacifico-Regular",
    color: "#ffffff",
    backgroundColor: colors.navColor,
  },
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },
  progressContainer: {
    width: "75%",
    marginBottom: 30,
    // elevation: 20,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  counterContainer: {
    alignItems: "center",
  },
  counterText: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
  },
  buttonSafe: {
    width: 150,
    height: 150,
    backgroundColor: colors.success,
    borderRadius: 100,
  },
  buttonDanger: {
    width: 150,
    height: 150,
    backgroundColor: colors.warning,
    borderRadius: 100,
  },
  adContainer: {
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
  },
});
