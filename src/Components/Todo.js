import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([{ }]);

  function onHandleChange(event) {
    return setText(event.target.value);
  }

  function onHandleClick() {
    if(text.trim()) {
      setText('');
      return setTodos([...todos, { todo: text, checked: false }]);
    }
  }

  function onSingleDelete(index) {
    // const newTodo = todos.map((todoItem, todoIndex) => {
    //   if(todoIndex === index){
    //     todoItem.checked = !todoItem.checked;
    //   }
    //   return todoItem
    // });
    todos[index].checked = !todos[index].checked
    setTodos([...todos]);
  }

  function onDeleteAll() {
    return setTodos([]);
  }

  const todo = todos.map((todoElem, todoIndex) => {
    return (
      <li key={todoIndex}>
        {todoElem.checked ? <del>{todoElem.todo}</del>: todoElem.todo}
        <button onClick={() => onSingleDelete(todoIndex)}>{todoElem.checked ? "Mark incomplete": "Mark complete"}</button>
      </li>
    );
  });

  return (
    <div>
      <input type="text" onChange={onHandleChange} value={text}/>
      <button onClick={onHandleClick}>Add</button>
      <div>
        <ul>{todo}</ul>
      </div>
      <button onClick={onDeleteAll}>Delete All</button>
    </div>
  );
};

export default Todo;
