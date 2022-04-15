import React from 'react';
import Todo from '../models/todo';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return <li key={todo.id}>{todo.text}</li>;
};

export default TodoItem;
