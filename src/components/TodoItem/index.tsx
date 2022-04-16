import React from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todos-slice';

import Todo from '../../models/todo';

import styles from './index.module.css';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispactch = useDispatch();

  const deleteHandler = () => {
    dispactch(todoActions.removeTodo(todo.id));
  };

  return (
    <li className={styles.item} key={todo.id} onClick={deleteHandler}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
