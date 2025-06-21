import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/app/Home';
import PlaceDetails from '../screens/app/PlaceDetails';
import TabNavigator from './TabNavigator';

export type AppStackParamList = {
  homeTab: undefined;
  placeDetails: {
    item?: object;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="homeTab">
      <Stack.Screen
        name="homeTab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="placeDetails"
        component={PlaceDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNav;
