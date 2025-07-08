export default function MemoNewsContent() {
  return (
    <>
      <div>
        <h1 className="text-center text-[25px]">
          <strong>Bienvenido a MemoNews – Novedades y actualizaciones</strong>
        </h1>
      </div>
      <div className="bg-white shadow p-1.5 rounded memonews-content-bg-dark">
        <article className="p-[5px]">
          <div className="pl-[15px] mt-5 mb-5 memonew-center-pd-res">
            <div className="bg-[#a5ff776e] rounded p-2.5">
              <p className="mt-5 mb-5">
                MemoNews es el espacio dedicado exclusivamente a mantener un
                registro de las actualizaciones que se van aplicando en Memobox.
                No vas a encontrar anuncios anticipados ni descripciones
                detalladas de cada función, sino un listado claro y ordenado de
                lo que ya fue agregado, ajustado o mejorado dentro de la
                plataforma.
              </p>
              <p>
                La idea de esta sección es simple: que tengas siempre a mano una
                referencia concreta de los cambios que se van incorporando, sin
                rodeos ni explicaciones extensas. Si algo nuevo aparece en
                Memobox, lo vas a ver reflejado acá, con una breve mención que
                te indique qué se sumó, qué se modificó o qué fue optimizado.
              </p>
              <p>
                Este espacio se actualiza cada vez que se lanza una mejora o una
                nueva función, por lo que podés volver siempre que quieras para
                ponerte al día con lo último implementado.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
