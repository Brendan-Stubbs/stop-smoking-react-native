import { Platform } from "react-native";
import { bannerIds } from "../constants/bannerIds";

export enum ScreenNames {
  homeScreen = "homeScreen",
}

export const getBannerId = (params: {
  test?: boolean;
  screen: ScreenNames;
}) => {
  const platformBanners =
    Platform.OS === "android" ? bannerIds.android : bannerIds.ios;

  return platformBanners[params.screen][params.test ? "test" : "production"];
};
