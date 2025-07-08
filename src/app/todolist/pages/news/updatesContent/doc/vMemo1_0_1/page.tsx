"use client";
import Link from "next/link";

function Sections({
  title,
  description,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className="p-[5px] shadow rounded bg-[#e3e2e273] memonews-bg-dark-sections">
      <div className="p-[5px]">{title}</div>
      <div className="pl-[15px] memonew-pd-res">
        <div className="p-2.5">{description}</div>
      </div>
    </div>
  );
}

export default function vMemo1_0_1() {
  return (
    <>
      <div className="p-[5px]">
        <h1 className="text-center text-[25px]">
          <strong>
            Actualización vMemo1.0.1 - Mejoras y nuevas funcionalidades
          </strong>
        </h1>
      </div>
      <div className="bg-white shadow p-1.5 rounded memonews-content-dark">
        <article className="p-[5px]">
          <div className="p-[5px] flex flex-col gap-2.5">
            <h2 className="font-semibold text-xl">
              ¡Bienvenido a la actualización <i>vMemo1.0.1!</i>
            </h2>
            <div className="pl-[15px] memonew-pd-res">
              <div className="p-2.5 bg-[#81ff7c47] rounded">
                <p className="mt-2.5 mb-2.5">
                  En esta versión hemos incorporado funciones y mejoras que
                  hacen de MemoBox una herramienta más útil y agradable de usar.
                </p>
                <p className="mt-2.5 mb-2.5">
                  Uno de los principales añadidos es el soporte para
                  notificaciones automáticas, que te permitirán programar
                  recordatorios directamente desde tus notas. Además, realizamos
                  mejoras visuales en la interfaz para ofrecerte una experiencia
                  más limpia.
                </p>
                <p className="mt-2.5 mb-2.5">
                  Con esta actualización, buscamos dar un paso más hacia una
                  plataforma más intuitiva, eficiente y adaptable a tu estilo.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 mb-2.5 p-[5px]">
            <h2 className=" text-center text-[22px] font-semibold">
              Funciones agregadas
            </h2>
          </div>
          <div className="flex flex-col gap-[15px]">
            <Sections
              title={<h2 className="text-[18px]">🔔Notificaciones</h2>}
              description={
                <>
                  <p>
                    Las notificaciones automáticas son una de las nuevas
                    funcionalidades añadidas en esta versión de MemoBox.
                  </p>
                  <p>
                    Con esta herramienta, ahora puedes programar recordatorios
                    directamente desde tus notas para que te avisen en la fecha
                    y hora que elijas. Es ideal para ayudarte a no olvidar
                    tareas importantes, ideas o cualquier actividad pendiente.
                  </p>
                  <p>
                    Actualmente, estas notificaciones funcionan solo si{" "}
                    <strong>
                      tienes la pestaña de <i>MemoBox abierta o fijada</i>
                    </strong>{" "}
                    en tu navegador. Esto se debe a las limitaciones iniciales
                    del sistema de notificaciones implementado con Service
                    Workers y el enfoque actual basado en el navegador.
                  </p>
                  <p>
                    Sabemos que esta funcionalidad puede ser aún más útil si
                    funciona incluso cuando no tienes MemoBox abierto, por eso
                    estamos explorando formas de extender el soporte de
                    notificaciones en segundo plano, al estilo de aplicaciones
                    como Facebook o Instagram. Nuestro objetivo es lograr que
                    los recordatorios lleguen de manera confiable, sin depender
                    de que mantengas la página activa.
                  </p>
                  <div className="flex flex-col">
                    <Link
                      href="/todolist/pages/guide"
                      className="p-[5px] rounded bg-amber-200 hover:bg-amber-500 w-fit memonews-text-Link-dark"
                    >
                      Ir a la lista de guías para entender como funcionan las
                      notificaciones de <i>MemoBox</i>
                    </Link>
                    <span>
                      ⚠️Se recomienda leer la lista de guías para saber como
                      funcionan las notificaciones de <strong>MemoBox</strong>
                    </span>
                  </div>
                </>
              }
            />
            <Sections
              title={
                <h2 className="text-[18px]">
                  🧩Mejora de la UI de <strong>Memobox</strong>
                </h2>
              }
              description={
                <>
                  <p>
                    Con esta actualización, también se ha trabajado en una
                    mejora de la interfaz(UI) para facilitar el uso de MemoBox
                    en distintos dispositivos.
                  </p>
                  <p>
                    Ahora contamos con un nuevo{" "}
                    <strong>menú de navegación responsive</strong>, que se
                    adapta automáticamente a pantallas pequeñas, como tablets o
                    teléfonos móviles.
                  </p>
                  <p>
                    Además de las mejoras en la interfaz, he incorporado nuevas
                    secciones al sitio con el objetivo de organizar mejor la
                    información y facilitar la navegación. Estas secciones están
                    pensadas para ofrecer una experiencia más clara, accesible y
                    estructurada para todos los usuarios.
                  </p>
                </>
              }
            />
          </div>
        </article>
      </div>
    </>
  );
}
