import { createSlice } from '@reduxjs/toolkit';
import Todo from '../models/todo';

interface ITodoState {
  items: Todo[];
}
interface IAddAction {
  payload: Todo;
  type: string;
}
interface IRemoveAction {
  payload: string;
  type: string;
}

const initialState: ITodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: IAddAction) {
      const newtodo = action.payload;
      state.items.push(newtodo);
    },
    removeTodo(state, action: IRemoveAction) {
      const existingTodoId = action.payload;
      state.items = state.items.filter((todo) => todo.id !== existingTodoId);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
