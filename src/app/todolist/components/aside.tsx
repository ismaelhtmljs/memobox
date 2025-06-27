export default function TodolistAside() {
  return (
    <div className="p-2.5">
      <aside className="shadow-md bg-white p-[15px] sticky top-3.5">
        <div className="p-[10px] flex flex-col gap-3.5">
          <div className="p-[5px]">
            <h2 className="text-xl">
              🔎 <strong>Buscador web</strong>
            </h2>
          </div>
          <div>
            <form
              action="https://www.google.com/search"
              method="get"
              target="_blank"
              className="flex flex-col mb-6 gap-[20px]"
            >
              <div>
                <input
                  type="text"
                  name="q"
                  className="border p-2 flex-1 rounded "
                  placeholder="Buscar en google ....."
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Buscar"
                  className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-800 w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}
