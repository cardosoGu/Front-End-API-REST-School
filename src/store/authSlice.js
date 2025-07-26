import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authThunk';

const initialState = {
  isLoggedIn: false,
  loading: false,
  token: null,
  // if there is error, to catch need error.error, cause API send {error: []}
  error: null,
  user: null,
};

// to format pelyoad, cause payload was saving in differents ways each time when login

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      return initialState;
    },
    setNewUser(state, action) {
      state.user = { nome: action.payload.nome, email: action.payload.email };
      state.token = action.payload.token;
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
          state.user = {
            id: action.payload.user.id,
            nome: action.payload.user.name,
            email: action.payload.user.email,
          };
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
