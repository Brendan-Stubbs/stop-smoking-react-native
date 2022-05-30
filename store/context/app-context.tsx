import { Moment } from "moment";
import { createContext, useState } from "react";
import React from "react";

interface AppContextInterface {
  lastSmoked?: Moment;
  setLastSmoked: (v: Moment) => void;
  smokedToday: number;
  setSmokedToday: (v: number) => void;
}

export const AppContext = createContext<AppContextInterface>({
  lastSmoked: undefined,
  setLastSmoked: (v: Moment) => {},
  smokedToday: 0,
  setSmokedToday: (v: number) => {},
});

interface Props {
  children: JSX.Element;
  defaultValues: {
    lastSmoked?: Moment;
    smokedToday: number;
  };
}

const AppContextProvider = (props: Props) => {
  const [lastSmoked, setLastSmoked] = useState<Moment | undefined>(
    props.defaultValues.lastSmoked
  );

  const [smokedToday, setSmokedToday] = useState<number>(
    props.defaultValues.smokedToday
  );

  const updateLastSmoked = (time: Moment) => {
    setLastSmoked(time);
  };

  const updateSmokedToday = (n: number) => {
    setSmokedToday(n);
  };

  const value = {
    lastSmoked,
    setLastSmoked: updateLastSmoked,
    smokedToday,
    setSmokedToday: updateSmokedToday,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
