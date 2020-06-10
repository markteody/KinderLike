// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Book1, Book2 } from './component/Read'
import Home from './component/Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Book1" component={Book1} />
        <Stack.Screen name="Book2" component={Book2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

