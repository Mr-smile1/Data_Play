import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home';
import Form from './screens/Form';

export default function RootNavigation() {
    const Stack = createStackNavigator();             // stack navigator

    const screenOptions = {                           // header of which page it is, like: home, form, etc
        headerShown: false,
    };

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>       
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}