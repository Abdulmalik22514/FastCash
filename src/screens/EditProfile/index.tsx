/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import Container from '@/components/Container';
import {hp, wp} from '@/constants/utils';
import HeadingText from '@/components/HeadingText';
import CustomInput from '@/components/CustomInput';
import {Formik, FormikValues} from 'formik';
import {COLORS} from '@/constants/colors';
import {CustomButton} from '@/components/CustomButton';
import {useAppDispatch, useAppSelector} from '@/hooks/useStore';
import useNavigation from '@/hooks/useNavigation';
import {UPDATE_USER} from '@/store/features/authSlice';
import Toast from 'react-native-toast-message';
// import {TextInput} from 'react-native-paper';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const {userDetails, user} = useAppSelector(state => state.authReducer);
  const [errorMsg, setErrorMsg] = useState('');

  const initialValues = {
    name: userDetails.name,
    lastName: '',
    job: userDetails.job,
  };

  const onSave = async ({name, job}: FormikValues) => {
    try {
      const {payload}: any = await dispatch(
        UPDATE_USER({id: user.id, name, job}),
      );
      console.log(payload);

      if (payload) {
        Alert.alert('Success', 'Details updated successfully');
        // showToast();
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSave}>
      {({values, handleChange, handleSubmit, isSubmitting}) => (
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
            disabled={isSubmitting}
            title="Save"
            style={styles.continueButton}
            onPressButton={handleSubmit}
            loading={isSubmitting}
          />
        </Container>
      )}
    </Formik>
  );
};

export default EditProfile;

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
