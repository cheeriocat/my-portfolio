"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { close } from "@/redux/features/sidemenu-slice";
import SideBar from "./SideBar";
import { cn } from "@/lib/utils";

const MobileSideMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidemenu.isOpen);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300 ease-in-out",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      {/* Dark backdrop overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => dispatch(close())}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
      />
      <SideBar
        className={cn(
          "transition-transform duration-300 ease-in-out will-change-transform shadow-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      />
    </div>
  );
};

export default MobileSideMenu;
