import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase(state, action) {
      state.counter += action.payload.value;
    },
    decrease(state, action) {
      state.counter -= action.payload.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - action.payload.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
