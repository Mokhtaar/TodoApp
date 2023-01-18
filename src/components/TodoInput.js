import React from "react";
import { useState } from "react";

const Todo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form className="mb-2"> 
        <input
        className=""
          placeholder='Add todo'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo(todo);
            setTodo("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Todo;

// import { useState } from "react";
// import "./App.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// function App() {
//   // const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Todos")) || []);
//   const [todos, setTodos] = useState([]);
//   const formik = useFormik({
//     initialValues: {
//         todo: ""
//     },
//     validationSchema: Yup.object({
//       todo: Yup.string().max(15, "max 15 kar").required("Input is required"),
//     }),
//     onSubmit: (values) => {
//       const d = new Date();
//       const todo = {id: d.getTime(), title: values.todo, completed: false};
//       setTodos([...todos, todo])
//       // localStorage.setItem("Todos", JSON.stringify([...todos, todo]))
//       formik.resetForm();
//     },
//   });

//   return (
//     <div className="App">
//       <form onSubmit={formik.handleSubmit} >
//         <input
//           placeholder="Enter Todo"
//           name="todo"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.todo}
//         ></input>
//         {formik.errors.todo && formik.touched.todo ? <p>{formik.errors.todo}</p>: null}
//         <button type="submit">
//           Sumbit
//         </button>
//       </form>
//       {todos.map((todo)=>
//           <li key={todo.id}>{todo.title}</li>
//         )}
//     </div>
//   );
// }

// export default App;


// function checkDone(selectedItem) {
//   const todos = todoList.map((item) => (item.id === selectedItem.id ?  {...item, text: "clicked" } : {...item}));
// setTodoList(todos)
// }

// function checkDone(selectedItem) {
//   const updatedList = todoList.map((item) => {
//     if (item.id === selectedItem.id) {
//      return {...item, text: "clicked"} 
//     }
//     else{
//       return item
//     }
//   });
//   setTodoList(updatedList);
// }