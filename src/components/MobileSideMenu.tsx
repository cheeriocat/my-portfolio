"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideBar from "./SideBar";

const MobileSideMenu = () => {
  const isOpen = useSelector((state: RootState) => state.sidemenu.isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 lg:hidden">
      <SideBar />
    </div>
  );
};

export default MobileSideMenu;
