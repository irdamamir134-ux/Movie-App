import { Tabs } from "expo-router";
import Colors from '../../../constants/colors';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.gray,
        tabBarActiveTintColor: Colors.primary
    }}>
        <Tabs.Screen name = "(home)/index"/>
        <Tabs.Screen name = "movies"/>
        <Tabs.Screen name = "series"/>
        <Tabs.Screen name = "profile"/>        
    </Tabs>
   
  );
}