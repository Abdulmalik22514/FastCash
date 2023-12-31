/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Container from '@/components/Container';
import {hp, wp} from '@/constants/utils';
import HeadingText from '@/components/HeadingText';
import CustomInput from '@/components/CustomInput';
import {Formik, FormikValues} from 'formik';
import {COLORS} from '@/constants/colors';
import {CustomButton} from '@/components/CustomButton';
import useNavigation from '@/hooks/useNavigation';
import {LOGIN} from '@/store/features/authSlice';
import {useAppDispatch, useAppSelector} from '@/hooks/useStore';

const initialValues = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka%',
};

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.authReducer);
  const [errorMsg, setErrorMsg] = useState('');

  console.log(token);

  const handleLogin = async ({email, password}: FormikValues) => {
    if (token) {
      try {
        const {payload}: any = await dispatch(LOGIN({email, password}));
        console.log(payload, 'jjj');

        if (payload?.token) {
          navigation.navigate('CreateUser');
        } else {
          return setErrorMsg(payload?.error);
        }
      } catch (error) {
        console.error('Signup failed:', error);
      }
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleLogin}>
      {({
        errors,
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        setFieldTouched,
      }) => (
        <Container style={styles.container}>
          {/* <View> */}
          <Text onPress={() => navigation.goBack()} style={styles.backText}>
            Back
          </Text>
          <HeadingText
            heading="Tell Us More About You"
            subHeading="Login with your registered email"
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
          {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>}
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
          </View>
          <CustomButton
            title="Login"
            style={styles.continueButton}
            onPressButton={handleSubmit}
            loading={isSubmitting}
          />
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

export default Login;

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
    paddingVertical: hp(5),
    paddingHorizontal: wp(10),
    fontSize: hp(16),
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
    marginTop: hp(50),
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
  backText: {
    color: COLORS.teal,
    marginBottom: hp(20),
  },
});
