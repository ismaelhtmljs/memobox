"use client";
import { useState } from "react";
import AsideGuide from "./aside/aside";
import GuideContent from "./guideContent/guideLog";
import HeaderGuide from "./header/headerGuide";
import AsideGuideRes from "./aside/responsive/asideGuideRes";

export default function MainGuide() {
  const [AsideGuideOpen, SetAsideGuideOpen] = useState(false);
  const [section, Setsection] = useState("inicio");

  return (
    <>
      <HeaderGuide AsideGuideOpen={() => SetAsideGuideOpen(true)} />
      <div className="pl-[270px] memoguide-res">
        <aside className="fixed top-[82px] left-0 w-[270px] h-[calc(100vh-82px)] bg-[#e0e7ff] overflow-y-auto memoguide-aside-res">
          <AsideGuide Setsection={Setsection} />
        </aside>
        <main className="bg-[#f8fafc] p-4 memonews-main-dark">
          <GuideContent section={section} />
        </main>
      </div>
      {AsideGuideOpen && (
        <AsideGuideRes Setsection={Setsection} onCloseAsideGuide={() => SetAsideGuideOpen(false)}/>
      )}
    </>
  );
}
