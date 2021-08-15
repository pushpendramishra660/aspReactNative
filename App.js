/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DashBoardStack from './src/navigations/dashboard.stack';
import SpendingLimit from './src/screens/dashboard/spending';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            animationEnabled: false,
            gestureEnabled: false,
            headerShown: false,
          }}
          name="Dashboard"
          component={DashBoardStack}
        />
        <Stack.Screen  options={{
            headerShown: false,
          }} name="SpendingLimit" component={SpendingLimit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
