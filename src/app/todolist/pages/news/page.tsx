import { Metadata } from "next";

import MainNews from "./main";
import '@/app/todolist/css/responsive/responsive.css'
import "@/app/todolist/css/global.css";
import "@/app/todolist/css/darkmode/dark.css";

export const metadata: Metadata = {
  title: "MemeNews",
};

export default function MemoNews() {
  return (
    <>
      <div className="_News">
        <MainNews />
      </div>
    </>
  );
}
