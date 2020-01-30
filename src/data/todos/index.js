import uuid from "uuid/v1";

const delay = ms => new Promise(res => setTimeout(res, ms));
const getTodos = async () => {
  await delay(2000)
  return [
    newTodo({ text: "Task 1", done: false, priority:2 }),
    newTodo({ text: "Task 2", done: false, priority:2 }),
    newTodo({ text: "Task 3...", done: false, priority:2 }),
    newTodo({ text: "Task 4", done: true, priority:2 }),
    newTodo({ text: "Task 5", done: true, priority:2 }),
    newTodo({ text: "Task 6", done: true, priority:2 }),
    newTodo({ text: "Task 7", done: true, priority:2 }),
    newTodo({ text: "Task 8", done: true, priority:2 }),
    newTodo({ text: "Task 9", done: true, priority:2 }),
    newTodo({ text: "Task 10", done: true, priority:2 }),
    newTodo({ text: "Task 11", done: true, priority:2 }),
    newTodo({ text: "Task 12", done: true, priority:2 }),
    newTodo({ text: "Task 13", done: true, priority:2 }),
    newTodo({ text: "Task 14", done: true, priority:2 }),
    newTodo({ text: "Task 15", done: true, priority:2 }),
    newTodo({ text: "Task 16", done: true, priority:2 }),
    newTodo({ text: "Task 17", done: true, priority:2 }),
    newTodo({ text: "Task 18", done: true, priority:2 }),
    newTodo({ text: "Task 19", done: true, priority:2 })
  ];
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];
const newTodo = todo => ({
  id: uuid(),
  text: todo.text,
  createAt: new Date(),
  done: todo.done,
  priority: todo.priority
});

const updateTodo = (list, todo) => {
  const updateIndex = list.findIndex(t => t.id === todo.id);
  const newTodoList = [...list];
  newTodoList[updateIndex] = todo;
  return newTodoList;
};

const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

export { getTodos, addTodo, updateTodo, deleteTodo };