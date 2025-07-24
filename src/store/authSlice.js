import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authThunk';

const initialState = {
  isLoggedIn: false,
  loading: false,
  token: null,
  // if there is error, to catch need error.error, cause API send {error: []}
  error: null,
  payload: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      return initialState;
    },
    setNewUser(state, action) {
      state.payload.user.name = action.payload.nome;
      state.payload.user.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(loginUser.pending, registerUser.pending), (state) => {
        state.loading = true;
        state.error = null;
        state.isLoggedIn = false;
      })

      .addMatcher(
        // add matcher, add 2 cases, is any of these 2 actions?
        isAnyOf(loginUser.fulfilled, registerUser.fulfilled),
        (state, action) => {
          state.loading = false;
          state.payload = action.payload;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(loginUser.rejected, registerUser.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.isLoggedIn = false;
        }
      );
  },
});

export const { setNewUser, logOut } = authSlice.actions;

export default authSlice.reducer;
