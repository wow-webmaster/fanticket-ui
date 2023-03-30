import { createSlice } from "@reduxjs/toolkit";
import { API_EVENT, API_TICKET } from "../../config";
import axios from "../../utils/axios";
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  saved: null,
};

const slice = createSlice({
  name: "ticket",
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

    setSavedTicket(state, action) {
      state.isLoading = false;
      state.saved = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
    setSavedTicket
} = slice.actions;

export function loadSavedTicket() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      axios
        .get(API_TICKET.getSavedTicket)
        .then((res) => {
          dispatch(slice.actions.setSavedTicket(res.data.data));
        })
        .catch((err) => {
          dispatch(slice.actions.hasError(err));
        });
    } catch (err) {}
  };
}
