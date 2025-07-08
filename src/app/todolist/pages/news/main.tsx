"use client";
import AsideNews from "./aside/aside";
import UpdatesContent from "./updatesContent/updatesLog";
import HeaderNews from "./header/headerNews";
import AsideNewsRes from "./aside/responsive/asideNewsRes";
import { useState } from "react";

export default function MainNews() {
  const [AsideNewsOpen, SetAsideNewsOpen] = useState(false);
  const [section, Setsection] = useState("inicio");

  return (
    <>
      <HeaderNews AsideNewsOpen={() => SetAsideNewsOpen(true)} />
      <div className="pl-[270px] memonews-res">
        <aside className="fixed top-[82px] left-0 w-[270px] h-[calc(100vh-82px)] bg-[#e0e7ff] overflow-y-auto memonews-aside-res">
          <AsideNews Setsection={Setsection} />
        </aside>
        <main className="bg-[#f8fafc] p-4 memonews-main-dark">
          <UpdatesContent section={section} />
        </main>
      </div>
      {AsideNewsOpen && (
        <AsideNewsRes
          onCloseAsideNews={() => SetAsideNewsOpen(false)}
          Setsection={Setsection}
        />
      )}
    </>
  );
}
