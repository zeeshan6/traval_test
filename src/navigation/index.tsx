import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './appNav';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};

export default Routes;
