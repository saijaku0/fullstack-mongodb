import type { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  asideSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className="flex flex-col items-center bg-slate-50">
      {props.announcementSlot}
      {props.headerSlot}
      <div className="container px-28">
        <nav>Navigation slot</nav>
        <main className="py-12 flex justify-between">
          <Outlet />
          <aside>{props.asideSlot}</aside>
        </main>
      </div>
      <footer>
        <div>
          Some footer text
        </div>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
