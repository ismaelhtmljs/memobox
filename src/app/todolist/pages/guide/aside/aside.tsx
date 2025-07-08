export default function AsideGuide({
  Setsection,
}: {
  Setsection: (section: string) => void;
}) {
  return (
    <aside className="h-[100%] w-[270px] bg-[#e0e7ff] p-4 overflow-y-auto memonews-aside-dark">
      <div className="flex flex-col gap-[15px]">
        <div className="p-[5px]">
          <h2 className="text-[18px]">
            <strong>Lista de guías</strong>
          </h2>
        </div>
        <nav className="overflow-y-auto pl-[17px]">
          <ul className="flex flex-col gap-[15px]">
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("Memoguide-Centro")}
            >
              MemoGuide - Centro
            </li>
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("Memoguide-fijar-pestaña")}
            >
              ¿Como fijar MemoBox?
            </li>
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("Memoguide-activar-notificación")}
            >
              ¿Como se activan las notificaciones?
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
