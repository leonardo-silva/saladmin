import { registerRootComponent } from 'expo';
import React from 'react';
// React-native-paper settings
//import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
//import { expo } from './app.json';

import { Routes } from './src/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}

//AppRegistry.registerComponent(expo.name, () => App);
registerRootComponent(App);