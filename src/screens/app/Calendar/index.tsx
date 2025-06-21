import React, { useState, useEffect } from 'react';
import { Text, StatusBar, SafeAreaView } from 'react-native';
import styles from '../Home/styles';

const Calendar = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StatusBar barStyle={'dark-content'} />
      <Text>Calendar</Text>
    </SafeAreaView>
  );
};

export default Calendar;
