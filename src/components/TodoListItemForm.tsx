import React, { useRef } from "react";

interface TodoListFormProps {
  onAddItem: (item: string, deadline: string) => void;
}

function TodoListForm({ onAddItem }: TodoListFormProps): JSX.Element {
  const workInputRef = useRef<HTMLInputElement>(null);
  const deadlineInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newWork = workInputRef.current!.value;
    const deadline = deadlineInputRef.current!.value;
    onAddItem(newWork, deadline);
    workInputRef.current!.value = "";
    deadlineInputRef.current!.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="A thing to do" ref={workInputRef} />
      <input type="date" placeholder="Deadline" ref={deadlineInputRef} />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoListForm;
