const Project = (title) => {
  let todoList = [];
  const addTodo = (todo) => {
    todoList.push(todo);
  };
  const removeTodo = (todo) => {
    todoList.splice(todoList.indexOf(todo), 1);
  };
  return {title, addTodo, removeTodo, todoList};
}

export default Project;