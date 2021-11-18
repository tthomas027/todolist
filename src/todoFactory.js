const Todo = (title, description, dueDate, priority) => {
  let complete = false;
  return {title, description, dueDate, priority, complete};
};

export default Todo;