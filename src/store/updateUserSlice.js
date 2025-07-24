import { createSlice } from '@reduxjs/toolkit';

import { updateUser } from './updateUserThunk';

const initialState = {
  loading: false,
  error: null,
  payload: null,
};

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.payload = payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export default updateUserSlice.reducer;
