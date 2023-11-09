import {StyleSheet, View} from 'react-native';
import React from 'react';
import {hp, wp} from '@/constants/utils';
import {COLORS} from '@/constants/colors';
import Container from '@/components/Container';
import CustomInput from '@/components/CustomInput';
import {Formik} from 'formik';
import {SignupFormValidationSchema, specialCharRe} from '@/utils/validation';
import PasswordValidatorIndicator from '@/components/PasswordValidatorIndicator/PasswordValidatorIndicator';
import {CustomButton} from '@/components/CustomButton';
import useNavigation from '@/hooks/useNavigation';
import HeadingText from '@/components/HeadingText';

const initialValues = {
  email: '',
  password: '',
};

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupFormValidationSchema}
      onSubmit={() => {}}>
      {({
        handleChange,
        errors,
        values,
        touched,
        handleBlur,
        setFieldTouched,
      }) => {
        // console.log({errors, values, touched});
        return (
          <Container style={styles.container}>
            <View>
              <HeadingText
                heading="Login"
                subHeading="Welcome to FastMoni, enjoy seamless transaction on our platform."
              />
              <CustomInput
                label="Email address"
                value={values.email}
                placeholder="Email address"
                onChangeText={handleChange('email')}
                onFocus={() => setFieldTouched('email')}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email ? errors.email : undefined}
              />
              <View>
                <CustomInput
                  label="Password"
                  value={values.password}
                  placeholder="Password"
                  isPassword
                  onChangeText={handleChange('password')}
                  onFocus={() => setFieldTouched('password')}
                />

                <>
                  <PasswordValidatorIndicator
                    title="Minimum of 8 characters"
                    checked={touched.password && values.password.length > 7}
                  />
                  <PasswordValidatorIndicator
                    title="One UPPERCASE character"
                    checked={touched.password && /[A-Z]/.test(values.password)}
                  />
                  <PasswordValidatorIndicator
                    title="One unique character (e.g: !@#$%^&*?)"
                    checked={
                      touched.password && specialCharRe.test(values.password)
                    }
                  />
                </>
              </View>
              <CustomButton
                title="Login"
                disabled={
                  !values.email ||
                  !values.password ||
                  !!errors.email ||
                  !!errors.password
                }
                onPressButton={() => navigation.navigate('Register')}
              />
            </View>
          </Container>
        );
      }}
    </Formik>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    paddingVertical: hp(30),
  },
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
