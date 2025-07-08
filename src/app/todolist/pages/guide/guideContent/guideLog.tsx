import MemoGuideContent from "./doc/memoguide/page"
import Fijar_Memobox from "./doc/fijar-memobox/page"
import Activar_Notificación from "./doc/activar-notificación/page"

export default function GuideContent({section} : {section: string}) {
  if (section === "Memoguide-Centro") return <MemoGuideContent/>
  if (section === "Memoguide-fijar-pestaña") return <Fijar_Memobox/>
  if (section === "Memoguide-activar-notificación") return <Activar_Notificación/>
  return <MemoGuideContent/>
}