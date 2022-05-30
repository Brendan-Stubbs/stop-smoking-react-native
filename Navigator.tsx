import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsScreen } from "./Screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "./Screens/HomeScreen";
import { Moment } from "moment";
import { colors } from "./constants/colors";

const BottomTabs = createBottomTabNavigator();

interface Props {
  smokedToday: number;
  setSmokedToday: (V: number) => void;
}

export const BottomTabNavigator = (props: Props) => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarActiveTintColor: colors.active,
        tabBarInactiveTintColor: colors.inactive,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-no-smoking" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
