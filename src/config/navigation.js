
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home'
import Camera from "./camera"

const Stack = createStackNavigator();


function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default AppNavigation;  