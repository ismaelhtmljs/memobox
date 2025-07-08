export default function Fijar_Memobox() {
  return (
    <>
      <div className="p-2.5">
        <h1 className="text-center text-[25px]">
          <strong>¿Como fijar la pestaña de MemoBox?</strong>
        </h1>
      </div>
      <div className="bg-white shadow p-1.5 rounded memonews-content-dark">
        <article className="p-[5px]">
          <div className="pl-[15px] mt-5 mb-5">
            <p>
              Fijar la pestaña de MemoBox en tu navegador es una excelente forma
              de tener la plataforma siempre visible y accesible, sin perderla
              entre otras páginas. Al fijar una pestaña, esta se reduce a solo
              mostrar el ícono del sitio y permanece anclada a la izquierda de
              tu barra de pestañas, incluso al reiniciar el navegador (según la
              configuración del mismo). A continuación, te mostramos cómo
              hacerlo en los navegadores más populares.
            </p>
            <div className="pl-[10px] mt-5 mb-5 memoguide-pd-small-res">
              <p className="text-xl memoguide-text-small-subtitulo">🌐 Google Chrome</p>
              <ol className="pl-[35px] list-decimal">
                <li>Abre <strong>MemoBox</strong> en una pestaña.</li>
                <li>Haz clic derecho sobre la pestaña.</li>
                <li>
                  Selecciona <i>Fijar</i> o <i>Pin tab</i>.
                </li>
                <li>
                  La pestaña se moverá automáticamente hacia la izquierda y solo
                  mostrará el ícono de la página.
                </li>
              </ol>
            </div>
            {/*  */}
            <div className="pl-[10px] mt-5 mb-5 memoguide-pd-small-res">
              <p className="text-xl memoguide-text-small-subtitulo">🧭 Microsoft Edge</p>
              <ol className="pl-[35px] list-decimal">
                <li>Ingresa a <strong>MemoBox</strong> desde una pestaña nueva.</li>
                <li>Haz clic derecho en la pestaña activa.</li>
                <li>
                  Haz clic en <i>Fijar pestaña</i> o <i>Anclar pestaña</i>.
                </li>
                <li>
                  Al igual que en Chrome, se minimizará y quedará anclada al
                  inicio.
                </li>
              </ol>
            </div>
            {/*  */}
            <div className="pl-[10px] mt-5 mb-5 memoguide-pd-small-res">
              <p className="text-xl memoguide-text-small-subtitulo">🦊 Mozilla Firefox</p>
              <ol className="pl-[35px] list-decimal">
                <li>Abre <strong>MemoBox</strong> en Firefox.</li>
                <li>Haz clic derecho sobre la pestaña.</li>
                <li>
                  Selecciona <i>Fijar pestaña</i>.
                </li>
                <li>
                  Firefox fijará la pestaña y solo verás su ícono a la izquierda.
                </li>
              </ol>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
