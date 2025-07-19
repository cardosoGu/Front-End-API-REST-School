import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../services/axios';

export const loginUser = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/alunos/2');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
});
