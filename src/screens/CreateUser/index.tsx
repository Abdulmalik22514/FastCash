/* eslint-disable @typescript-eslint/no-unused-vars */
import {Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Container from '@/components/Container';
import {hp, wp} from '@/constants/utils';
import HeadingText from '@/components/HeadingText';
import CustomInput from '@/components/CustomInput';
import {Formik, FormikValues} from 'formik';
import {ArrowDown, CalenderIcon, FlagIcon} from '@/assets/svgs/svg';
import {COLORS} from '@/constants/colors';
import {CustomButton} from '@/components/CustomButton';
import {useAppDispatch, useAppSelector} from '@/hooks/useStore';
import useNavigation from '@/hooks/useNavigation';
import {CREATE_USER} from '@/store/features/authSlice';
// import {TextInput} from 'react-native-paper';

const initialValues = {
  name: '',
  lastName: '',
  job: '',
};

const CreateUser = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.authReducer);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCreate = async ({name, job}: FormikValues) => {
    if (!name || !job) {
      return setErrorMsg('Fill in required fields');
    }
    if (token) {
      try {
        const {payload}: any = await dispatch(CREATE_USER({name, job}));

        if (payload) {
          navigation.navigate('Home');
        } else {
          return setErrorMsg(payload?.error);
        }
      } catch (error) {
        console.error('Signup failed:', error);
      }
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleCreate}>
      {({
        errors,
        values,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
      }) => (
        <Container style={styles.container}>
          {/* <View> */}
          <HeadingText
            heading="Tell Us More About You"
            subHeading="Please use your name as it appears on your ID."
          />
          <CustomInput
            placeholder="Legal first name"
            value={values.name}
            label={'first name'}
            onChangeText={handleChange('name')}
            onBlur={() => {
              if (values.name) {
                setErrorMsg('');
              }
            }}
          />
          {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>}

          <CustomInput
            placeholder="Legal last name"
            value={values.lastName}
            label={'last name'}
            onChangeText={handleChange('lastName')}
          />
          <CustomInput
            placeholder="job"
            value={values.job}
            label={'job'}
            onChangeText={handleChange('job')}
          />
          {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>}

          <CustomButton
            title="Continue"
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

export default CreateUser;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    paddingVertical: hp(30),
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
});
