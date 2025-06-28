import Headertodolist from "./components/header";
import TodolistHome from "./main";
import "@/app/todolist/css/global.css";
import '@/app/todolist/css/darkmode/dark.css'

export default function TodoListMain() {
  return (
    <>
      <Headertodolist />
      <TodolistHome />
    </>
  );
}
