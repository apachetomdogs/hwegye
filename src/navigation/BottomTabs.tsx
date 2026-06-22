import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AccountDictionaryScreen from "../screens/AccountDictionaryScreen";
import HomeScreen from "../screens/HomeScreen";
import LearnScreen from "../screens/LearnScreen";
import MyPageScreen from "../screens/MyPageScreen";
import WrongNoteScreen from "../screens/WrongNoteScreen";
import { colors } from "../theme/colors";

type BottomTabParamList = {
  Home: undefined;
  Learn: undefined;
  WrongNote: undefined;
  AccountDictionary: undefined;
  MyPage: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const tabIcons: Record<
  keyof BottomTabParamList,
  keyof typeof Ionicons.glyphMap
> = {
  Home: "home-outline",
  Learn: "book-outline",
  WrongNote: "alert-circle-outline",
  AccountDictionary: "search-outline",
  MyPage: "person-outline",
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primaryOrange,
        tabBarInactiveTintColor: colors.textSub,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={tabIcons[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "홈" }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{ tabBarLabel: "학습" }}
      />
      <Tab.Screen
        name="WrongNote"
        component={WrongNoteScreen}
        options={{ tabBarLabel: "오답" }}
      />
      <Tab.Screen
        name="AccountDictionary"
        component={AccountDictionaryScreen}
        options={{ tabBarLabel: "사전" }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ tabBarLabel: "마이" }}
      />
    </Tab.Navigator>
  );
}
