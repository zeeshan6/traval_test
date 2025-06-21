import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from '../themes/Icons';
import Home from '../screens/app/Home';
import { Metrics } from '../themes';
import AppNav from './appNav';
import Calendar from '../screens/app/Calendar';
import Messages from '../screens/app/Messages';
import Profile from '../screens/app/Profile';
import Search from '../screens/app/Search';

const Tab = createBottomTabNavigator();
const styleJson = {
  borderRadius: 100,
  //   marginTop: -5,
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  width: Metrics.hpR(6),
  height: Metrics.hpR(6),
  alignItems: 'center',
  justifyContent: 'center',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#fff',
          height: Metrics.hpR(10),
          paddingTop: Metrics.hpR(1.3),
          //   borderRadius: 100,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          paddingBottom: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
        },
        tabBarLabelStyle: {
          fontSize: Metrics.hpR(1.3),
        },
        tabBarActiveTintColor: '#4873BC',
        tabBarInactiveTintColor: '#8A8B8F',
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Home') {
            return <Icons.Octicons name="home" color={color} size={size} />;
          }
          if (route.name === 'Calendar') {
            return (
              <Icons.Ionicons
                name="calendar-outline"
                color={color}
                size={size}
              />
            );
          }
          if (route.name === 'Search') {
            return (
              <View
                style={{
                  backgroundColor: '#2C6EF5',
                  ...styleJson,
                }}
              >
                <Icons.Feather name="search" color={'#fff'} size={24} />
              </View>
            );
          }
          if (route.name === 'Messages') {
            return (
              <Icons.MaterialIcons name="message" color={color} size={size} />
            );
          }
          if (route.name === 'Profile') {
            return (
              <Icons.FontAwesome name="user-o" color={color} size={size} />
            );
          }
        },
        tabBarLabel: route.name === 'Search' ? '' : route.name,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
