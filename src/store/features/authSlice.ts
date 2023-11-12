import axiosInstance from '@/helpers/axiosInstance';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

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
  singleUser: any;
  userDetails: any;
  updatedUser: any;
}

export interface LoginStateProps {
  email: string;
  password: string;
}

export interface CreateUserProps {
  name: string;
  job: string;
}

export interface UpdateUserProps extends CreateUserProps {
  id: number;
}

const initialState = {
  loading: false,
  token: null,
  error: '',
  user: null,
  singleUser: {},
  userDetails: null,
  updatedUser: null,
} as InitialStateProps;

export const REGISTER = createAsyncThunk(
  'api/register',
  async ({email, password}: LoginStateProps): Promise<unknown> => {
    try {
      const res = await axiosInstance.post('/register', {
        email,
        password,
      });
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  },
);

export const LOGIN = createAsyncThunk(
  'api/login',
  async ({email, password}: LoginStateProps): Promise<unknown> => {
    try {
      const res = await axiosInstance.post('/login', {
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
  'api/create-user',
  async ({name, job}: CreateUserProps): Promise<unknown> => {
    try {
      const res = await axiosInstance.post('/users', {
        name,
        job,
      });
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  },
);

export const GET_USER = createAsyncThunk(
  'api/get-user',
  async (id: number): Promise<unknown> => {
    try {
      const res = await axiosInstance.get(`/users/${id}`);
      return res.data?.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  },
);

export const UPDATE_USER = createAsyncThunk(
  'api/update-user',
  async ({id, name, job}: UpdateUserProps): Promise<unknown> => {
    try {
      const res = await axiosInstance.put(`/users/${id}`, {name, job});
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  },
);

export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: builder => {
    //------------------------- REGISTER CASE -----------------------------
    builder.addCase(REGISTER.pending, state => {
      state.loading = true;
    });
    builder.addCase(REGISTER.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(REGISTER.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.error = action.error.message || 'something happened';
    });
    //------------------------- LOGIN CASE -----------------------------
    builder.addCase(LOGIN.pending, state => {
      state.loading = true;
    });
    builder.addCase(LOGIN.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(LOGIN.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.error = action.error.message || 'something happened';
    });
    //------------------------- CREATE_USER CASE -----------------------------
    builder.addCase(CREATE_USER.pending, state => {
      state.loading = true;
    });
    builder.addCase(CREATE_USER.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
      state.error = '';
    });
    builder.addCase(CREATE_USER.rejected, (state, action) => {
      state.loading = false;
      state.userDetails = null;
      state.error = action.error.message || 'something happened';
    });
    //------------------------- GET_USER CASE -----------------------------
    builder.addCase(GET_USER.pending, state => {
      state.loading = true;
    });
    builder.addCase(GET_USER.fulfilled, (state, action) => {
      state.loading = false;
      state.singleUser = action.payload;
      state.error = '';
    });
    builder.addCase(GET_USER.rejected, (state, action) => {
      state.loading = false;
      state.singleUser = {};
      state.error = action.error.message || 'something happened';
    });
    //------------------------- GET_USER CASE -----------------------------
    builder.addCase(UPDATE_USER.pending, state => {
      state.loading = true;
    });
    builder.addCase(UPDATE_USER.fulfilled, (state, action) => {
      state.loading = false;
      state.updatedUser = action.payload;
      state.error = '';
    });
    builder.addCase(UPDATE_USER.rejected, (state, action) => {
      state.loading = false;
      state.updatedUser = {};
      state.error = action.error.message || 'something happened';
    });
  },
});

export const {setToken, clearToken} = AuthSlice.actions;

export default AuthSlice.reducer;
