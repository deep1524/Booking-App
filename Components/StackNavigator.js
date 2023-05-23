import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import { Feather } from "@expo/vector-icons";

import SavedScreen from "../Screens/SavedScreen";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import BookingScreen from "../Screens/BookingScreen";
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "../Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";



const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLable: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <Feather name="home" size={24} color="black" />
              ),
          }}
        />
         <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLable: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="heart" size={24} color="#003580"/>
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
         <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLable: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="#003580" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ),
          }}
        />
         <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLable: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#003580" />
              ) : (
                <Ionicons name="person-add-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
