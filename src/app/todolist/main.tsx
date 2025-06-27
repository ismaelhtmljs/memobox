"use client"
import TodolistAside from "./components/aside";
import TodolistContent from "./note/todolist";

export default function TodolistHome() {
  return (
    <>
      <div className="_nextjs">
        <main>
          <div className="flex flex-row p-2.5">
            <TodolistAside />
            <TodolistContent />
          </div>
        </main>
      </div>
    </>
  );
}
