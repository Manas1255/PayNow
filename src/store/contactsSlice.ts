import {
  collection,
  getDocs,
  getFirestore,
} from '@react-native-firebase/firestore';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const db = getFirestore();
      const snapshot = await getDocs(collection(db, 'users'));

      const users = snapshot.docs.map(doc => doc.data());
      return users;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      }),
      builder.addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
