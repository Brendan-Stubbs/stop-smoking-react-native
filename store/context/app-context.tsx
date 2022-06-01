import { Moment } from "moment";
import { createContext, useState } from "react";
import React from "react";
import { Timer } from "../types";

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

  // Can I delete?
  const updateLastSmoked = (time: Moment) => {
    setLastSmoked(time);
  };

  // Can I delete?
  const updateSmokedToday = (n: number) => {
    setSmokedToday(n);
  };

  // Can I delete?
  const updateTimer = (timer: Timer) => {
    setTimer(timer);
  };

  const value = {
    lastSmoked,
    setLastSmoked: updateLastSmoked,
    smokedToday,
    setSmokedToday: updateSmokedToday,
    timer,
    setTimer: updateTimer,
    maxCigs,
    setMaxCigs,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
