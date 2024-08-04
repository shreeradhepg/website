"use client";
import DesktopLocationView from "@/components/DesktopLocationView";
import MobileLocationView from "@/components/MobileLocationView";
import DesktopView from "@/components/views/desktopView";
import MobileView from "@/components/views/mobileView";
import TabView from "@/components/views/tabView";
import React from "react";

const Page = () => {
  return (
    <div>
      <MobileView>
        <MobileLocationView />
      </MobileView>
      <TabView>
        <MobileLocationView />
      </TabView>
      <DesktopView>
        <DesktopLocationView />
      </DesktopView>
    </div>
  );
};

export default Page;
