import Headertodolist from "./components/header";
import TodolistHome from "./main";
import "@/app/todolist/css/global.css";

export default function TodoListMain() {
  return (
    <>
      <Headertodolist />
      <TodolistHome />
    </>
  );
}
