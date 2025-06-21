import React, { useState, useEffect } from 'react';
import { Text, StatusBar, SafeAreaView } from 'react-native';
import styles from '../Home/styles';

const Search = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StatusBar barStyle={'dark-content'} />
      <Text>Search</Text>
    </SafeAreaView>
  );
};

export default Search;
