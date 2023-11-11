import {COLORS} from '@/constants/colors';
import {hp} from '@/constants/utils';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabIcon from 'react-native-vector-icons/AntDesign';

interface TabComponentProps {
  focused: boolean;
  icon: React.ReactNode;
  label: string;
}

const TabComponent = (props: TabComponentProps) => {
  const {focused, icon, label} = props;
  return (
    <View style={styles.tabContainer}>
      <TabIcon
        name={icon}
        size={23}
        color={focused ? COLORS.teal : COLORS.input}
      />
      <Text
        style={[
          styles.tabIconLabel,
          {color: focused ? COLORS.teal : COLORS.input},
        ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
  },
  tabIconLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default TabComponent;
