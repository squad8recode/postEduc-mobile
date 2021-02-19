import {StatusBar} from 'expo-status-bar'
import React from 'react';
import {Text, View } from 'react-native';

import Routes from './router';


export default function App() {

  return (
    <>
      <StatusBar style='light' backgroundColor="#000" translucent={false} />
      <Routes />
    </>
  );
}


