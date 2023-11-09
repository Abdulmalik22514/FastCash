import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface InitialStateProps {
  loading: boolean;
  news: any;
  error: string;
}

interface LoginStateProps {
  email: string;
  password: string;
}

const initialState = {
  loading: false,
  news: [],
  error: '',
} as InitialStateProps;

export const LOGIN = createAsyncThunk(
  'api/login',
  async ({email, password}: LoginStateProps) => {
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
);

export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(LOGIN.pending, state => {
      state.loading = true;
    });
    builder.addCase(LOGIN.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.error = '';
    });
    builder.addCase(LOGIN.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message || 'something happend';
    });
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
