import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CheckMark} from '@/assets/svgs/svg';
import {COLORS} from '@/constants/colors';
import {wp, hp} from '@/constants/utils';

interface PasswordValidatorIndicator {
  checked?: boolean;
  title: string;
}

export default function PasswordValidatorIndicator(
  props: PasswordValidatorIndicator,
) {
  const {checked, title} = props;
  return (
    <View style={styles.checkBoxView}>
      <View style={[styles.checkBox, checked && styles.confirmBg]}>
        {!checked ? null : <CheckMark />}
      </View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    width: wp(16),
    height: hp(16),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.teal,
    backgroundColor: 'white',
    marginRight: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(10),
  },
  confirmBg: {
    backgroundColor: COLORS.teal,
  },
});
