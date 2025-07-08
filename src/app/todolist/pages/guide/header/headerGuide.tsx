"use client";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import "@/app/todolist/css/header.css";

export default function HeaderGuide({AsideGuideOpen} : {AsideGuideOpen: () => void}) {
  return (
    <>
      <header className="bg-moded p-moded text-mod sticky top-0">
        <div className="p-1.5 flex justify-around items-center memoguide-h-res">
          <div className="flex gap-2.5 items-center">
            <h1 className="text-[20px] cursor-pointer">
              <strong>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/">MemoBox</a>
              </strong>
            </h1>
            <IoMenuSharp onClick={AsideGuideOpen} className="text-xl hidden menu-res"/>
          </div>
          <nav>
            <ul className="flex gap-5 items-center text-[15px] w-max ul-res-header">
              <li>
                <Link
                  href="/todolist"
                  className="cursor-pointer hover-a-repo text-white"
                >
                  ⬅️volver a MemoBox
                </Link>
              </li>
              <li>
                <Link
                  href="/todolist/pages/news"
                  className="cursor-pointer hover-a-repo text-white"
                >
                  📰MemoNews
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
