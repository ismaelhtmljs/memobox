"use client";
import { useEffect, useState } from "react";
import ModalTodolist from "../components/modal";
import MiniTodoList from "../components/minitodolist";

export default function TodolistContent() {
  // UIWODS => Cuadro para escribir
  // SOPQBX => Input del To-do-list

  const [isModalOpen, SetisModalOpen] = useState(false);

  const [Note_pad, SetNotePad] = useState<
    { titulo: string; contenido: string }[]
  >(() => {
    if (typeof window !== "undefined") {
      const guardado = localStorage.getItem("memoboxNotePads");
      return guardado ? JSON.parse(guardado) : [];
    }
    return [];
  });

  const [To_do_list, SetTo_do_list] = useState<{ titulo_list: string }[]>(
    () => {
      if (typeof window !== "undefined") {
        const guardado = localStorage.getItem("memoboxTodoList");
        return guardado ? JSON.parse(guardado) : [];
      }
      return [];
    }
  );

  useEffect(() => {
    localStorage.setItem("memoboxNotePads", JSON.stringify(Note_pad));
  }, [Note_pad]);

  useEffect(() => {
    localStorage.setItem("memoboxTodoList", JSON.stringify(To_do_list));
  }, [To_do_list]);

  const CreateBlock = (titulo: string) => {
    SetNotePad([...Note_pad, { titulo, contenido: "" }]);
  };

  const UpdateNotePadContent = (index: number, contenido: string) => {
    const Actualizar = [...Note_pad];
    Actualizar[index].contenido = contenido;
    SetNotePad(Actualizar);
  };

  const DeleteNotePad = (index: number) => {
    const eliminar = Note_pad.filter((_, i) => i !== index);
    SetNotePad(eliminar);
  };

  const CreateList = (titulo_list: string) => {
    SetTo_do_list([...To_do_list, { titulo_list }]);
  };

  const DeleteTodoList = (index: number) => {
    const eliminar = To_do_list.filter((_, i) => i !== index);
    SetTo_do_list(eliminar);
  };

  return (
    <div className="p-2.5 w-full mt-5 todolist-conteiner-res">
      {/*  */}
      <div className="flex justify-between items-center todolist-titulo-memobox">
        <div>
          <h2 className="text-3xl font-bold">📝 Mis Listas</h2>
        </div>
        <div>
          <button
            type="button"
            onClick={() => SetisModalOpen(true)}
            className="bg-[#4f46e5] text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-800"
          >
            Agregar lista
          </button>
        </div>
      </div>

      {/* modal */}
      {isModalOpen && (
        <ModalTodolist
          onClose={() => SetisModalOpen(false)}
          onCreate={CreateBlock}
          onCreateLista={CreateList}
        />
      )}
      <div>
        {/* contendor de las listas */}
        <div className="grid p-2.5 gap-[25px] p-res-conteiner-lista grid-res">
          {/* creacion de un note-pad */}
          {Note_pad.map((lista, i) => (
            <div
              key={i}
              className="p-4 bg-white shadow h-fit w-res-block"
              id="note-pad"
            >
              <div
                className={`p-2.5 flex gap-2.5 block-titulo-res ${
                  lista.titulo.length > 15
                    ? "items-start"
                    : "justify-between items-center"
                }`}
              >
                <h3
                  className={`text-2xl ${
                    lista.titulo.length > 17 ? "break-all text-xl" : ""
                  }`}
                >
                  <strong>{lista.titulo}</strong>
                </h3>
                <div>
                  <button
                    type="button"
                    className="p-[5px] bg-red-500 rounded text-white cursor-pointer hover:bg-red-800"
                    onClick={() => DeleteNotePad(i)}
                  >
                    eliminar
                  </button>
                </div>
              </div>
              <div className="p-2.5">
                <textarea
                  name="UIWODS"
                  value={lista.contenido}
                  onChange={(e) => UpdateNotePadContent(i, e.target.value)}
                  className="border p-2 rounded mt-2 w-full resize-none h-[233px]"
                ></textarea>
              </div>
            </div>
          ))}

          {/* creacion de una todo list */}
          {To_do_list.map((todolist, n) => (
            <div
              key={n}
              className="p-4 bg-white shadow h-fit todolist-conteiner-total-w"
              id="todolist"
            >
              <div className="p-2.5 flex flex-col">
                <div className="flex items-center gap-2.5 justify-between minitodolist-res-titulo">
                  <h3
                    className={`text-2xl ${
                      todolist.titulo_list.length > 14
                        ? "break-all text-xl"
                        : ""
                    }`}
                  >
                    <strong>{todolist.titulo_list}</strong>
                  </h3>
                  <button
                    type="button"
                    className="p-[5px] bg-red-500 rounded text-white cursor-pointer hover:bg-red-800 bton-delete-todolist-res"
                    onClick={() => DeleteTodoList(n)}
                  >
                    eliminar
                  </button>
                </div>
                <p className="text-xs">tipo de lista : Desordenada</p>
              </div>

              {/* aqui va el mini todo list donde va a estar toda la logica */}
              <MiniTodoList />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
