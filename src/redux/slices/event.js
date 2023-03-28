import { createSlice } from "@reduxjs/toolkit";
import { API_EVENT } from "../../config";
import axios from "../../utils/axios";
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  events: [],
};

const slice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    setAvailableEvent(state, action) {
      state.isLoading = false;
      state.events = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
    setAvailableEvent
} = slice.actions;

export function loadAvailableEvents() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      axios
        .get(API_EVENT.getAvailabelEvent)
        .then((res) => {
          
          dispatch(slice.actions.setAvailableEvent(res.data.data));
        })
        .catch((err) => {
          dispatch(slice.actions.hasError(err));
        });
    } catch (err) {}
  };
}
