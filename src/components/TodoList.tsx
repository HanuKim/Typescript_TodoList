import React from "react";
import Item from "../models/item";

interface TodoListProps {
  items: Item[];
}

export default function TodoList({ items }: TodoListProps): JSX.Element {
  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.work} _ {item.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}
