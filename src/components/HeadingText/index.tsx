import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/constants/colors';
import {hp} from '@/constants/utils';

interface HeadingTextProps {
  heading: string;
  subHeading: string;
}

const HeadingText = (props: HeadingTextProps) => {
  const {heading, subHeading} = props;
  return (
    <View>
      <Text style={styles.headingText}>{heading}</Text>
      <Text style={styles.subHeading}>{subHeading} </Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.textColor,
  },
  subHeading: {
    color: COLORS.neutral,
    marginVertical: hp(20),
    fontSize: 15,
  },
});
