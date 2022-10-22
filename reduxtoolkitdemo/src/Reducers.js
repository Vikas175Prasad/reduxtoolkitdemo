import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

// export const customReducer = createSlice({
//   name: "customReducer",
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       state.c = state.c + 1;
//     },
//     incrementByValue: (state, action) => {
//       state.c = state.c + action.payload;
//     },
//     decrement: (state, action) => {
//       state.c = state.c - 1;
//     },
//   },
// });

// export const {increment, decrement, incrementByValue} = customReducer.actions

// export default customReducer.reducer

export const customReducer = createReducer(initialState,{
    // This is the action that will be called when the action is dispatched.
    increment: (state, action) => {
        state.c = state.c +1;
    },

    incrementByValue: (state, action) => {
        state.c = state.c + action.payload;
    },

    decrement : (state, action) => {
        state.c = state.c -1;
    }
})
