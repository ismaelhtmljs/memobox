import Headertodolist from "./components/header/header";
import TodolistHome from "./main";
import AlertPoPUpdate from "@/components/alerts/updates/alertUpdate";
import "@/app/todolist/css/global.css";
import "@/app/todolist/css/darkmode/dark.css";

export default function TodoListMain() {
  return (
    <>
      <Headertodolist />
      <TodolistHome />
    </>
  );
}
