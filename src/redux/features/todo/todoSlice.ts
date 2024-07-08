import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dummyState } from "../../../components/constants/dummyState";
import { TTodoInitialState } from "../../../components/types/types";

const initialState: TTodoInitialState = {
  todos: dummyState,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompletion: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const selectedTodo = state.todos.find((todo) => todo.id === id);
      if (selectedTodo) {
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
      }
    },
  },
});
