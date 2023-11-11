import * as React from 'react';
import 'react-native-gesture-handler';
import {RootStackParamList} from '../types/types';
import Login from '../screens/Login';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Register from '@/screens/Register';
import TabNavigator from './TabNavigator';

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Login" screenOptions={options}>
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="Home" component={TabNavigator} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
