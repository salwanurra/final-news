import { createSlice } from "@reduxjs/toolkit";

var valid: Boolean;

export const saveSlice = createSlice({
  name: "saved",
  initialState: {
    saved: JSON.parse(localStorage.getItem("saved")) || [],
    value: "",
  },
  reducers: {
    addNews: (state, action) => {
      if (valid) {
        state.saved = [...state.saved, action.payload];
        localStorage.setItem("saved", JSON.stringify(state.saved));
      }
    },

    deleteNews: (state, action) => {
      if (!valid) {
        state.saved = state.saved.filter(
          (saved) => saved.title !== action.payload.title
        );
        localStorage.setItem("saved", JSON.stringify(state.saved));
      }
    },
    deleteFromSaved: (state, action) => {
      state.saved = state.saved.filter(
        (saved) => saved.title !== action.payload.title
      );
      localStorage.setItem("saved", JSON.stringify(state.saved));
    },

    checkData: (state, action) => {
      valid = true;

      for (let i = 0; i < state.saved.length; i++) {
        if (state.saved[i].title === action.payload.title) {
          valid = false;
   
          break;
        } else {
          state.button = true;
          valid = true;
      
        }
      }
    },
  },
});

export const saveSelector = (state) => state.saved;
export const { addNews, deleteNews, deleteFromSaved, buttonState, checkData } =
  saveSlice.actions;
export default saveSlice.reducer;
