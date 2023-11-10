import * as Yup from 'yup';

export const specialCharRe = /[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]/;
export const noSpaceRe = /^\S*$/;
export const letters = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;

export const changePasswordFormValidationSchema = Yup.object().shape({
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Must match new password')
    .required('Confirm password is required'),
  currentPassword: Yup.string().required('Current password is required'),
  newPassword: Yup.string()
    .trim()
    .required('New Password is required')
    .matches(noSpaceRe, 'no-spaces-allowed')
    .matches(/\d/, 'Password must contain a number')
    .matches(/[a-z]/, 'Password must contain lowercase letter')
    .matches(/[A-Z]/, 'Password must contain uppercase letter')
    .matches(specialCharRe, 'Password must contain special characters')
    .min(8, 'Password must have at least 8 letters')
    .max(100, 'Password must have at most 100 letters')
    .notOneOf([Yup.ref('currentPassword')], 'Must not be the same password'),
});

export const loginFormValidationSchema = Yup.object().shape({
  country: Yup.string().trim().required('Country is required'),
  email: Yup.string()
    .trim()
    .required('Email is required.')
    .email('Please enter a valid email format.'),
  password: Yup.string().trim().required('Password is required'),
});

export const SignupFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Email is required.')
    .email('Please enter a valid email format.'),
  password: Yup.string()
    .trim()
    .min(8, 'must be more than 8 characters')
    .required('Password is required')
    .matches(/[A-Z]/, 'Password must contain uppercase letter')
    .matches(specialCharRe, 'Password must contain special characters'),
});
