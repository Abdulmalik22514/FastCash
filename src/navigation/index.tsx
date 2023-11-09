import * as React from 'react';
import 'react-native-gesture-handler';
import {RootStackParamList} from '../types/types';
import SignUp from '../screens/SignUp';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Register from '@/screens/Register';

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="SignUp" screenOptions={options}>
      <RootStack.Screen name="SignUp" component={SignUp} />
      <RootStack.Screen name="Register" component={Register} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
