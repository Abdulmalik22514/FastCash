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
import CreateUser from '@/screens/CreateUser';

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Register" screenOptions={options}>
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Home" component={TabNavigator} />
      <RootStack.Screen name="CreateUser" component={CreateUser} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
