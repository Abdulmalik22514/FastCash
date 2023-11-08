/* eslint-disable @typescript-eslint/no-unused-vars */
import {Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Container from '@/components/Container';
import {hp, wp} from '@/constants/utils';
import HeadingText from '@/components/HeadingText';
import CustomInput from '@/components/CustomInput';
import {Formik} from 'formik';
import {ArrowDown, CalenderIcon, FlagIcon} from '@/assets/svgs/svg';
import {COLORS} from '@/constants/colors';
import {CustomButton} from '@/components/CustomButton';
// import {TextInput} from 'react-native-paper';

const Register = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    nickName: '',
    countryCode: '+234',
    phoneNumber: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({
        errors,
        values,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <Container style={styles.container}>
          {/* <View> */}
          <HeadingText
            heading="Tell Us More About You"
            subHeading="Please use your name as it appears on your ID."
          />
          <CustomInput
            placeholder="Legal first name"
            value={values.firstName}
            label={'first name'}
          />
          <CustomInput
            placeholder="Legal last name"
            value={values.lastName}
            label={'last name'}
          />
          <CustomInput
            placeholder="Nick name"
            value={values.nickName}
            label={'nick name'}
          />
          {/* </View> */}
          <View>
            <View style={styles.label}>
              <Text style={styles.labelText}>Phone Number</Text>
            </View>
            <View style={styles.countryInputBox}>
              <View style={styles.countryPicker}>
                <FlagIcon />
                <Text style={styles.countryCode}>{values.countryCode}</Text>
                <Pressable>
                  <ArrowDown />
                </Pressable>
              </View>

              <View />

              <TextInput
                placeholder="8030525323"
                placeholderTextColor={COLORS.textColor}
                style={styles.textInput}
                keyboardType={'numeric'}
                maxLength={11}
              />
            </View>
          </View>

          <View style={[styles.countryInputBox, {marginTop: hp(20)}]}>
            <Text style={styles.countryCode}>Choose date</Text>
            <Pressable>
              <CalenderIcon />
            </Pressable>
          </View>
          <CustomButton title="Continue" style={styles.continueButton} />
          <Text style={styles.termsConditionText}>
            By clicking Continue, you agree to our {'\n'}{' '}
            <Text style={styles.serviceLink}>Terms of Service</Text> and{' '}
            <Text style={styles.serviceLink}>Privacy Policy.</Text>
          </Text>
        </Container>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    paddingVertical: hp(30),
  },
  countryInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E1E8ED',
    padding: 10,
    marginTop: hp(10),
    height: hp(55),
    justifyContent: 'space-between',
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    justifyContent: 'space-between',
  },
  textInput: {
    borderLeftWidth: 1,
    height: '100%',
    borderColor: COLORS.grey,
    marginLeft: wp(5),
    width: '65%',
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textColor,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textColor,
  },
  termsConditionText: {
    textAlign: 'center',
    fontSize: 12,
  },
  serviceLink: {
    color: COLORS.teal,
  },
  continueButton: {
    marginTop: hp(20),
    marginBottom: hp(30),
  },
  label: {
    // backgroundColor: '#81AA66',
    paddingHorizontal: 8,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 13,
    top: 0,
    zIndex: 200,
  },
  labelText: {
    color: COLORS.teal,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
