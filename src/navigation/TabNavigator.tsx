/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import EditProfile from '@/screens/EditProfile';
import Home from '@/screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabComponent from '@/components/TabComponent';
import {TabParamList} from '@/types/types';
import {hp} from '@/constants/utils';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingTop: hp(10),
          height: hp(60),
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent focused={focused} icon="home" label={'Home'} />
          ),
        }}
      />
      <Tab.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabComponent focused={focused} icon="edit" label={'Edit'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
