import moment, { Moment } from "moment";
import { createContext, useEffect, useState } from "react";
import React from "react";
import { Timer } from "../types";
import { getTodaysCigarettes } from "../../utils/local-storage-helper";

interface AppContextInterface {
  lastSmoked?: Moment;
  setLastSmoked: (v: Moment) => void;
  smokedToday: number;
  setSmokedToday: (v: number) => void;
  timer: Timer;
  setTimer: (v: Timer) => void;
  maxCigs: number;
  setMaxCigs: (v: number) => void;
}

export const AppContext = createContext<AppContextInterface>({
  lastSmoked: undefined,
  setLastSmoked: (v: Moment) => {},
  smokedToday: 0,
  setSmokedToday: (v: number) => {},
  timer: { minutes: 0, hours: 0 },
  setTimer: (v: Timer) => {},
  maxCigs: 0,
  setMaxCigs: (v: number) => {},
});

interface Props {
  children: JSX.Element;
  defaultValues: {
    lastSmoked?: Moment;
    smokedToday: number;
    timer: Timer;
    maxCigs: number;
  };
}

const AppContextProvider = (props: Props) => {
  const [maxCigs, setMaxCigs] = useState(props.defaultValues.maxCigs);
  const [timer, setTimer] = useState(props.defaultValues.timer);

  const [lastSmoked, setLastSmoked] = useState<Moment | undefined>(
    props.defaultValues.lastSmoked
  );

  const [smokedToday, setSmokedToday] = useState<number>(
    props.defaultValues.smokedToday
  );

  useEffect(() => {
    const timeTilMidnight = moment().endOf("day").diff(moment());

    setTimeout(async () => {
      const todaysCigs = await getTodaysCigarettes();
      setSmokedToday(todaysCigs.length);
    }, timeTilMidnight + 1000);
  }, [smokedToday]);

  const value = {
    lastSmoked,
    setLastSmoked,
    smokedToday,
    setSmokedToday,
    timer,
    setTimer,
    maxCigs,
    setMaxCigs,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
