import { Announcement } from "@/shared/ui/Announcement";
import { Layout } from "@/shared/ui/Layout";
import { Header } from "@/widgets/Header";

export const pageLayout = (
  <Layout
    announcementSlot={
      <Announcement>
        <span>
          🚀&nbsp;&nbsp;An&nbsp;open source frontend application built with
          React and Feature-Sliced&nbsp;Design.
        </span>
      </Announcement>
    }
    asideSlot={
      <>
        <div>side1</div>
        <div>side2</div>
      </>
    }
    headerSlot={<Header />}
  />
);
