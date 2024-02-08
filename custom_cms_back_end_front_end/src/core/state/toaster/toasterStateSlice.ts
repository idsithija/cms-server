import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state interface
interface ToasterState {
  errors: any[]; // Array of errors
  showToast: boolean; // Boolean to determine whether to show the toaster
}

// Define the initial state
const initialState: ToasterState = {
  errors: [],
  showToast: false,
};

// Create a slice
export const toasterSlice = createSlice({
  name: 'toaster',
  initialState,
  reducers: {
    showToast: (state) => {
      state.showToast = true;
    },
    hideToast: (state) => {
      state.showToast = false;
    },
    addError: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;
    },
  },
});

// Export actions and reducer
export const { showToast, hideToast, addError } = toasterSlice.actions;
