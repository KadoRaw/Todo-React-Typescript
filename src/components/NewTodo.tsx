import { useRef } from 'react';
import Todo from '../models/todo';
import htmlService from '../service/htmlService';

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    const todo = new Todo(enteredText!.trim());

    const response = await htmlService.post<Todo>(
      `https://todo-typescript-bcc8c-default-rtdb.europe-west1.firebasedatabase.app/${todo.id}.json`,
      todo
    );

    console.log(response);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>ToDo</label>
      <input type='text' id='text' ref={textInputRef} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
