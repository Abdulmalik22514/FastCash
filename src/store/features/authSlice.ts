import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface InitialStateProps {
  loading: boolean;
  user: any;
  error: string;
}

export interface LoginStateProps {
  email: string;
  password: string;
}

const initialState = {
  loading: false,
  user: [],
  error: '',
} as InitialStateProps;

export const SIGN_UP = createAsyncThunk(
  'api/login',
  async ({email, password}: LoginStateProps): Promise<unknown> => {
    try {
      const res = await axios.post('https://reqres.in/api/register', {
        email,
        password,
      });
      console.log(res, 'ffff');

      return res.data;
    } catch (err) {
      console.log(err?.response?.data, 'dddd');
      return err?.response?.data;
    }
  },
);

export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(SIGN_UP.pending, state => {
      state.loading = true;
    });
    builder.addCase(SIGN_UP.fulfilled, (state, action) => {
      console.log(action.payload, 'ff');

      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(SIGN_UP.rejected, (state, action) => {
      console.log(action.error.message, 'ggg');

      state.loading = false;
      state.user = [];
      state.error = action.error.message || 'something happened';
    });
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
