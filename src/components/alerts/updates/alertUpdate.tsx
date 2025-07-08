"use client";
import { useState } from "react";
import "@/components/alerts/alert.css";
import "@/app/todolist/css/responsive/responsive.css";

export default function AlertPoPUpdate() {
  const [isVisible, SetVisbile] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <div className="alert-bgmoded p-2.5">
        <div className="text-center flex justify-around items-center alertPop-res">
          <p className="alertPop-p-size-res">
            <strong>📦 Actualización vMemo1.0.1 : </strong> Descubre la nueva función de
            notificaciones y explora las nuevas secciones que trae MemoBox.
          </p>
          <button
            type="button"
            onClick={() => SetVisbile(false)}
            className="p-1.5 bg-red-500 rounded hover:cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
}
