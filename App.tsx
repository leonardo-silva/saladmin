import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);