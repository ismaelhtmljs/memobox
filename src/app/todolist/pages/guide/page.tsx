import { Metadata } from "next";
import MainGuide from "./main";
import "@/app/todolist/css/global.css";
import '@/app/todolist/css/responsive/responsive.css'
import "@/app/todolist/css/darkmode/dark.css";

export const metadata: Metadata = {
  title: "MemeGuide",
};

export default function MemoGuide() {
  return (
    <>
      <div className="_guide">
        <MainGuide />
      </div>
    </>
  );
}
