import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunk';

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  payload: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.payload = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
