import React from 'react';
// React-native-paper settings
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';

import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';

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
      <SignIn />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);