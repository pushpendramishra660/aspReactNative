import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screens from '../screens/index';
import {Navigations, Colors} from '../constants/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator
      screenOptions={{
      tabBarActiveTintColor: Colors.malachite,
      tabBarInactiveTintColor: Colors.alto,
      headerShown: false
      }}
    >
    <Tabs.Screen
      name={Navigations.DashBoard.HOME}
      component={Screens.Home}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <AntDesign
            name="upcircle"
            size={size ? size : 24}
            color={focused ? color : Colors.alto}
            focused={focused}
          />
        ),
      }}
    />

    <Tabs.Screen
      name={Navigations.DashBoard.DEBIT_CARD}
      component={Screens.DebitCard}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <Entypo
            name="credit-card"
            size={size ? size : 24}
            color={focused ? color : Colors.alto}
            focused={focused}
          />
        ),
      }}
    />

    <Tabs.Screen
      name={Navigations.DashBoard.PAYMENTS}
      component={Screens.Payments}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <FontAwesome
            name="history"
            size={size ? size : 24}
            color={focused ? color : Colors.alto}
            focused={focused}
          />
        ),
      }}
    />

    <Tabs.Screen
      name={Navigations.DashBoard.CREDIT}
      component={Screens.Credit}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <FontAwesome
            name="arrow-circle-up"
            size={size ? size : 24}
            color={focused ? color : Colors.alto}
            focused={focused}
          />
        ),
      }}
    />

    <Tabs.Screen
      name={Navigations.DashBoard.PROFILE}
      component={Screens.Profile}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <FontAwesome
            name="user"
            size={size ? size : 24}
            color={focused ? color : Colors.alto}
            focused={focused}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);
