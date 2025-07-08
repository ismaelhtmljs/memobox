import VMemo1_0_1 from "./doc/vMemo1_0_1/page";
import MemoNewsContent from "./doc/memoNews/page";
export default function UpdatesContent({ section }: { section: string }) {
  if (section === "vMemo1.0.1") return <VMemo1_0_1 />;
  return <MemoNewsContent />;
}
