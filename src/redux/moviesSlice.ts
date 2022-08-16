import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "redux/store";

// Define a type for the slice state
interface PageState {
  page: number;
  totalPages: number;
}
// Define the initial state using that type
const initialState: PageState = {
  page: 1,
  totalPages: 0,
};

export const counterSlice = createSlice({
  name: "page",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { increment, decrement, setPage, setTotalPages } =
  counterSlice.actions;

export default counterSlice.reducer;
