import { useEffect } from "react";

export const usePromise = (f: () => Promise<any>, d?: any[]) => {
  useEffect(() => {
    const execute = async () => {
      await f();
    };
    execute();
  }, d);
};
