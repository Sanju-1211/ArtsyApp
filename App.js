import HomeScreen from "./app/screens/HomeScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import React from 'react';
import { Platform, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from "./app/config/colors";
import FollowingNavigation from "./app/navigation/FollowingNavigation";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  screenOptions={({route}) => ({
                                    tabBarHideOnKeyboard: true,
                                    tabBarStyle: {
                                      backgroundColor: colors.green,
                                      height:40,
                                    },
                                    tabBarShowLabel: false,
                                    headerShown: false,
                                  })}>

      <Tab.Screen name="Home" 
                  component={FollowingNavigation}
                  options={{
                    tabBarIcon: ({focused}) => (
                      <View
                        style={{
                          top: Platform.OS === 'ios' ? 10 : 0,
                        }}>
                        <MaterialCommunityIcons name="home" size={24} color="white" />
                      </View>
                    ),
                  }} 
                  />
      <Tab.Screen name="Cart" 
                  component={HomeScreen} 
                  options={{
                    tabBarIcon: ({focused}) => (
                      <View
                        style={{
                          top: Platform.OS === 'ios' ? 10 : 0,
                        }}>
                        <MaterialCommunityIcons name="cart-variant" size={24} color="white" />
                      </View>
                    ),
                  }} 
                  />
      <Tab.Screen name="Message" 
                  component={HomeScreen} 
                  options={{
                    tabBarIcon: ({focused}) => (
                      <View
                        style={{
                          top: Platform.OS === 'ios' ? 10 : 0,
                        }}>
                        <MaterialCommunityIcons name="facebook-messenger" size={24} color="white"  />
                      </View>
                    ),
                  }} 
                  />      
      <Tab.Screen name="Profile" 
                  component={ProfileScreen} 
                  options={{
                    tabBarIcon: ({focused}) => (
                      <View
                        style={{
                          top: Platform.OS === 'ios' ? 10 : 0,
                        }}>
                        <Ionicons name="person-circle" size={24} color="white" />
                      </View>
                    ),
                  }} 
                  />       
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>     
      
    </NavigationContainer>
  );
}
