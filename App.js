import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native'; 

import App from './src/index';

YellowBox.ignoreWarnings([
  'Cannot connect to the Metro Server',
])

export default function Main() {
  return (
    <App />
  );
}
