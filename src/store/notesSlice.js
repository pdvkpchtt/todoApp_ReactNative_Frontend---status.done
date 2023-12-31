import { createSlice } from "@reduxjs/toolkit";

import notes from "../data/notes";

const initialState = {
  notes: notes,
  filteredNotes: notes,
  category: "",
  refreshing: true,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    updateNotes: (state, action) => {
      state.refreshing = true;
      state.category = "";
      state.filteredNotes = state.notes; // пока так
      state.refreshing = false;
    },
    filterNotes: (state, action) => {
      state.filteredNotes = state.notes.filter((item) =>
        item.head.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setFilter: (state, action) => {
      state.category = action.payload;
      state.filteredNotes = state.notes.filter(
        (item) => item.category.toLowerCase() == action.payload
      );
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((item) => item.id != action.payload);
      state.filteredNotes = state.notes;
    },
    setBookmarked: (state, action) => {
      const newState = {
        ...state,
        notes: state.notes.map((item, index) =>
          action.payload == item.id
            ? { ...item, bookmarked: !item.bookmarked }
            : { ...item }
        ),
        filteredNotes: state.filteredNotes.map((item, index) =>
          action.payload == item.id
            ? { ...item, bookmarked: !item.bookmarked }
            : { ...item }
        ),
      };

      return newState;
    },
    createNote: (state, action) => {
      const newState = {
        ...state,
        notes: [action.payload, ...state.notes],
      };

      return newState;
    },
    editNote: (state, action) => {
      const newState = {
        ...state,
        notes: state.notes.map((item, index) =>
          action.payload.id == item.id
            ? {
                ...item,
                head: action.payload.head,
                text: action.payload.text,
                category: action.payload.category,
              }
            : { ...item }
        ),
        filteredNotes: state.filteredNotes.map((item, index) =>
          action.payload.id == item.id
            ? {
                ...item,
                head: action.payload.head,
                text: action.payload.text,
                category: action.payload.category,
              }
            : { ...item }
        ),
      };

      return newState;
    },
  },
});
