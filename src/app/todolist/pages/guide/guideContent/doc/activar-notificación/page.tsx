export default function Activar_Notificación() {
  return (
    <>
      <div className="p-2.5">
        <h1 className="text-center text-[25px]">
          <strong>¿Como activar las notificaciones de MemoBox?</strong>
        </h1>
      </div>
      <div className="bg-white shadow p-1.5 rounded memonews-content-dark">
        <article className="p-[5px]">
          <div className="pl-[15px] mt-5 mb-5">
            <div className="flex gap-2.5">
              <p>
                Para activar las notificaciones de MemoBox, primero asegúrate de
                que tienes los permisos de notificación habilitados en tu
                navegador. Cuando accedas a MemoBox, el sistema te pedirá
                permiso para mostrar notificaciones; es importante que aceptes
                esta solicitud para que puedas recibir alertas directamente en
                tu escritorio o dispositivo.
              </p>
            </div>
            <div>
              <div>
                <h2 className="text-xl">
                  ¿⚠️Como funcionan las notificaciones?
                </h2>
              </div>
              <div className="pl-[15px]">
                <div className="bg-amber-200 rounded p-2.5 memoguide-text-dark">
                  <p>
                    Es fundamental tener en cuenta cómo funciona actualmente el
                    sistema de notificaciones de MemoBox. Las notificaciones
                    solo se enviarán correctamente si tienes la pestaña de
                    MemoBox fijada en tu navegador, o si estás navegando
                    activamente dentro de la plataforma. Si MemoBox no está
                    abierto, o si el navegador está completamente cerrado, no
                    recibirás las notificaciones. Esta es una limitación técnica
                    actual que estamos trabajando para mejorar.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Nuestro objetivo es que en futuras actualizaciones las
              notificaciones puedan enviarse y recibirse aunque MemoBox no esté
              abierto directamente, de manera similar a como lo hacen
              plataformas como Instagram o WhatsApp Web. Estamos explorando
              nuevas tecnologías para lograr una experiencia más fluida y
              funcional, y avisaremos tan pronto esté disponible.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
