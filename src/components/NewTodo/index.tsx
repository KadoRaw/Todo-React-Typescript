import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Todo from '../../models/todo';
import { todoActions } from '../../store/todos-slice';

import styles from './index.module.css';

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const dispactch = useDispatch();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    const todo: Todo = {
      id: Math.random().toString(),
      text: enteredText!,
    };
    dispactch(todoActions.addTodo(todo));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor='text'>ToDo</label>
      <input type='text' id='text' ref={textInputRef} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
