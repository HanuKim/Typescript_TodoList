import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoListForm from "./components/TodoListItemForm";
import Item from "./models/item";
import { v4 as getId } from "uuid";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (work: string, deadline: string) => {
    // console.log("Made to the app component!");
    setItems([...items, { id: getId(), work, deadline }]);
  };
  // const items = [
  //   { id: 1, work: "Buying a book", deadline: "by Jan 20" },
  //   { id: 2, work: "Taking a TS lecture", deadline: "by Jan 23" },
  // ];
  return (
    <div>
      {<TodoList items={items} />}
      <TodoListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
