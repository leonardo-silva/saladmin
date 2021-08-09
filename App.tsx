import { registerRootComponent } from 'expo';
import React from 'react';
// React-native-paper settings
//import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AuthContext } from './src/hooks/auth';
//import { expo } from './app.json';

import { AuthProvider } from './src/hooks/auth';

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
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
}

//AppRegistry.registerComponent(expo.name, () => App);
registerRootComponent(App);