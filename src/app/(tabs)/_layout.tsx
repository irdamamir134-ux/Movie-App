import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.darkBorder,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={String(color)} />
          ),
        }}
      />

      <Tabs.Screen
        name="movies"
        options={{
          title: "Movies",
          tabBarIcon: ({ color }) => (
            <Feather name="film" size={20} color={String(color)} />
          ),
        }}
      />

      <Tabs.Screen
        name="series"
        options={{
          title: "Series",
          tabBarIcon: ({ color }) => (
            <Feather name="tv" size={20} color={String(color)} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={String(color)} />
          ),
        }}
      />
    </Tabs>
  );
}
