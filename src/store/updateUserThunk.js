import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../services/axios';

export const updateUser = createAsyncThunk(
  'user/update',
  async (data, thunkAPI) => {
    try {
      const response = await axios.put('/users/update', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
