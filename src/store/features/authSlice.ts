import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface UserProps {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}
interface InitialStateProps {
  loading: boolean;
  token: any;
  error: string;
  user: any;
}

export interface LoginStateProps {
  email: string;
  password: string;
}

export interface CreateUserProps {
  name: string;
  job: string;
}

const initialState = {
  loading: false,
  token: {},
  error: '',
  user: {},
} as InitialStateProps;

export const LOGIN = createAsyncThunk(
  'api/login',
  async ({email, password}: LoginStateProps): Promise<unknown> => {
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  },
);

export const CREATE_USER = createAsyncThunk(
  'api/create',
  async ({name, job}: CreateUserProps): Promise<unknown> => {
    try {
      const res = await axios.post('https://reqres.in/api/users', {
        name,
        job,
      });
      console.log(res?.data, 'ffff');

      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  },
);

export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //------------------------- LOGIN CASE -----------------------------
    builder.addCase(LOGIN.pending, state => {
      state.loading = true;
    });
    builder.addCase(LOGIN.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = '';
    });
    builder.addCase(LOGIN.rejected, (state, action) => {
      state.loading = false;
      state.token = {};
      state.error = action.error.message || 'something happened';
    });
    //------------------------- CREATE_USER CASE -----------------------------
    builder.addCase(CREATE_USER.pending, state => {
      state.loading = true;
    });
    builder.addCase(CREATE_USER.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(CREATE_USER.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message || 'something happened';
    });
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
