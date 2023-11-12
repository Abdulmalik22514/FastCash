import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '@/constants/utils';
import {COLORS} from '@/constants/colors';
import Container from '@/components/Container';
import CustomInput from '@/components/CustomInput';
import {Formik, FormikValues} from 'formik';
import {CustomButton} from '@/components/CustomButton';
import useNavigation from '@/hooks/useNavigation';
import HeadingText from '@/components/HeadingText';
import {useAppDispatch} from '@/hooks/useStore';
import {REGISTER} from '@/store/features/authSlice';

const initialValues = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka%',
};

const Register = () => {
  const navigation = useNavigation();
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useAppDispatch();

  const handleRegister = async ({email, password}: FormikValues) => {
    try {
      const {payload}: any = await dispatch(REGISTER({email, password}));

      if (payload?.id) {
        navigation.navigate('CreateUser');
      } else {
        return setErrorMsg(payload?.error);
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      // validationSchema={SignupFormValidationSchema}
      onSubmit={handleRegister}>
      {({
        handleChange,
        errors,
        values,
        touched,
        handleBlur,
        setFieldTouched,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <Container style={styles.container}>
            <View>
              <HeadingText
                heading="Login to your account"
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
                disabled={
                  !values.email ||
                  !values.password ||
                  !!errors.email ||
                  !!errors.password
                }
                onPressButton={handleSubmit}
                style={{marginTop: hp(50)}}
                loading={isSubmitting}
                variant={undefined}
              />
            </View>
          </Container>
        );
      }}
    </Formik>
  );
};

export default Register;

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
