class Todo {
  id: string;
  text: string;

  constructor(
    text: string,
    id: string = Math.random().toString().split('.')[1]
  ) {
    this.text = text;
    this.id = id;
  }
}

export default Todo;
