import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import ListItem from "./components/DisplayList";
import FilterList from "./components/FilterList";
import TodoItem from "./components/TodoInput";
import { nanoid } from "nanoid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [FilteredList, setFilteredList] = useState("All");

  let value = 0;

  const addTodo = (input) => {

    setTodoList([
      ...todoList,
      { text: input, isCompleted: false, id: `Todo-${nanoid()}` },
    ]);
  };

  function updateFilter(text) {
    setFilteredList(text);
  }
  
  function DisplayTasks() {
    switch (FilteredList) {
      case "Uncompleted":
        return todoList.filter((todo) => !todo.isCompleted);

      case "Done":
        return todoList.filter((todo) => todo.isCompleted);

      case "All":
      default:
        return todoList;
    }
  }

  function markAsDone(selectedItem) {
    const updatedList = todoList.map((item) => {
      if (item.id === selectedItem.id) {
        return { ...item, isCompleted: true };
      } else {
        return item;
      }
    });
    setTodoList(updatedList);
  }

  function deleteTodo(itemToDelete) {
    const updatedList = todoList.filter((item) => item.id !== itemToDelete.id);
    setTodoList(updatedList);
  }

  console.log(todoList);

  return (
    <div className='App'>
      <div>
        <TodoItem addTodo={addTodo} />
        <FilterList updateFilter={updateFilter} />
        <ListItem
          markAsDone={markAsDone}
          deleteTodo={deleteTodo}
          todoList={todoList}
          DisplayTasks={DisplayTasks}
        />
      </div>
    </div>
  );
}

export default App;
