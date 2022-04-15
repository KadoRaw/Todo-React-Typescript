import React from 'react';
import { useContext } from 'react';
import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const todoCtx = useContext(TodosContext);

  const deleteHandler = () => {
    todoCtx.removeTodo(todo.id);
  };

  return (
    <li className={styles.item} key={todo.id} onClick={deleteHandler}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
