import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TextInputProps} from 'react-native-paper';
import {COLORS} from '@/constants/colors';
import {hp} from '@/constants/utils';

interface CustomInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  label: string;
  isPassword?: boolean;
  error?: string;
}

const CustomInput = (props: CustomInputProps) => {
  const {placeholder, value, onChangeText, label, isPassword, error, ...rest} =
    props;
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeholder}
        outlineColor={'#E1E8ED'}
        activeOutlineColor={COLORS.teal}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && passwordVisible}
        right={
          isPassword && (
            <TextInput.Icon
              icon={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(prev => !prev)}
              color={COLORS.teal}
            />
          )
        }
        style={styles.textInputStyle}
        {...rest}
        // error={!!error}
      />
      {error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInputStyle: {
    fontWeight: '700',
    fontSize: 15,
    marginVertical: hp(10),
    backgroundColor: 'white',
    color: COLORS.textColor,
  },
});
