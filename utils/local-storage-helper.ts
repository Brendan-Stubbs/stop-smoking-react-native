import AsyncStorage from "@react-native-async-storage/async-storage";
import { Moment, utc as moment } from "moment";
import { Timer } from "../store/types";

export enum LocalStorageKeys {
  LastSmoked = "lastSmoked",
  Timer = "timer",
}

export const loadLastSmoked = async () => {
  const result = await AsyncStorage.getItem(LocalStorageKeys.LastSmoked);
  if (result) {
    return moment(result);
  }
  return;
};

export const setLSLastSmoked = async (lastSmoked: Moment) => {
  await AsyncStorage.setItem(LocalStorageKeys.LastSmoked, lastSmoked.format());
};

export const getTodaysCigarettes = async () => {
  const key = moment().startOf("day").toString();
  const cigarettes = await AsyncStorage.getItem(key);

  if (cigarettes) {
    return JSON.parse(cigarettes).map((cig: string) => moment(cig));
  }

  return [];
};

export const logCigarette = async (
  lastSmoked: Moment,
  setTotalState: (v: number) => void
) => {
  await AsyncStorage.setItem(LocalStorageKeys.LastSmoked, lastSmoked.format());

  const key = moment().startOf("day").toString();

  const result = await getTodaysCigarettes();
  const cigarettes = result ? result : [];
  cigarettes.push(lastSmoked.toISOString());
  setTotalState(cigarettes.length);

  await AsyncStorage.setItem(key, JSON.stringify(cigarettes));
};

export const loadTimer = async () => {
  const loaded = await AsyncStorage.getItem(LocalStorageKeys.Timer);
  return loaded ? (JSON.parse(loaded) as Timer) : undefined;
};

export const saveTimer = async (timer: Timer) => {
  await AsyncStorage.setItem(LocalStorageKeys.Timer, JSON.stringify(timer));
};
