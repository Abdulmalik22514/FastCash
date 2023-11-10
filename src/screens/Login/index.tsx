import {StyleSheet, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, wp} from '@/constants/utils';
import {COLORS} from '@/constants/colors';
import Container from '@/components/Container';
import CustomInput from '@/components/CustomInput';
import {Formik, FormikValues} from 'formik';
import {SignupFormValidationSchema, specialCharRe} from '@/utils/validation';
import PasswordValidatorIndicator from '@/components/PasswordValidatorIndicator/PasswordValidatorIndicator';
import {CustomButton} from '@/components/CustomButton';
import useNavigation from '@/hooks/useNavigation';
import HeadingText from '@/components/HeadingText';
import {useAppDispatch, useAppSelector} from '@/hooks/useStore';
import {LOGIN, LoginStateProps, SIGN_UP} from '@/store/features/authSlice';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const navigation = useNavigation();
  const [errorMsg, setErrorMsg] = useState('');
  const {user, error, loading} = useAppSelector(state => state.authReducer);

  // console.log({user: 'user', error: 'error', loading: 'load'});

  console.log(error, 'sss');

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (user) {

  //   }
  // }, []);

  const handleLogin = async ({email, password}: FormikValues) => {
    console.log('im here');
    try {
      const {payload} = await dispatch(SIGN_UP({email, password}));
      if (!payload) {
        return setErrorMsg('Only defined users succeed registration');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  console.log(errorMsg, 'rrr');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupFormValidationSchema}
      onSubmit={() => navigation.navigate('Register')}>
      {({
        handleChange,
        errors,
        values,
        touched,
        handleBlur,
        setFieldTouched,
        handleSubmit,
      }) => {
        console.log({errors});
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
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                />

                {/* <>
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
                </> */}
              </View>
              <CustomButton
                title="Login"
                disabled={
                  !values.email ||
                  !values.password ||
                  !!errors.email ||
                  !!errors.password
                }
                onPressButton={handleSubmit}
                style={{marginTop: hp(50)}}
              />
            </View>
          </Container>
        );
      }}
    </Formik>
  );
};

export default Login;

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
