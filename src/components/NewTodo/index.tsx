import { useRef, useContext } from 'react';

import { TodosContext } from '../../store/todos-context';

import styles from './index.module.css';

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText!);
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
