import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {hp, wp} from '../../constants/utils';

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};

export const CustomButton: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  style,
  styleText,
  disabled,
  loading,
  variant = 'primary',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressButton}
      disabled={disabled}
      style={[
        styles.buttonStyle,
        styles[variant],

        disabled && styles.isSignIn,

        style,
      ]}>
      {loading ? (
        <ActivityIndicator size={15} color={'white'} />
      ) : (
        <Text
          style={[
            styles.buttonTitle,
            disabled && styles.signInText,
            styleText,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.teal,
  },
  secondary: {
    backgroundColor: 'purple',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: hp(15),
  },
  signInText: {
    color: COLORS.teal,
  },
  buttonStyle: {
    backgroundColor: COLORS.teal,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(10),
    paddingVertical: wp(16),
  },
  isSignIn: {
    backgroundColor: COLORS.offWhite,
  },
});
