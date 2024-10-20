import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Features/ToDo/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const remTodoHandler = (e) => {
    dispatch(removeTodo(e));
  };

  const [inputValue, setInputValue] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const EditOn = (id, text) => {
    setIsEditable(true);
    setInputValue(text);
    setCurrentTodoId(id);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update inputValue state
  };

  const Inpt = (e) => {
    if (currentTodoId) {
      dispatch(updateTodo({ id: currentTodoId, text: inputValue })); // Dispatch update action
      setIsEditable(false); // Reset editable state
      setCurrentTodoId(null); // Reset current todo id
      setInputValue(""); // Clear inputValue
    }
  };

  return (
    <>
      <div>MyTodos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={
              isEditable && currentTodoId === todo.id ? inputValue : todo.text
            }
            id={todo.id}
            onChange={handleInputChange}
            disabled={!isEditable || currentTodoId !== todo.id}
          />
          <button onClick={(e) => remTodoHandler(todo.id)}>XXXX</button>
          <button onClick={() => EditOn(todo.id, todo.text)}>EDIT</button>
          {isEditable && currentTodoId === todo.id && (
            <button onClick={Inpt}>SAVE</button> // Save button to update todo
          )}
        </li>
      ))}
    </>
  );
}

export default Todos;
