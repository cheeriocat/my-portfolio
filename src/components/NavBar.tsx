"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggle } from "@/redux/features/sidemenu-slice";
import { Menu } from "lucide-react";

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-3 bg-primary dark:bg-gray-900 lg:hidden">
      <h1 className="font-bold text-white text-sm">Kaveen Nimsara</h1>
      <Button variant="ghost" size="icon" onClick={() => dispatch(toggle())}>
        <Menu className="text-white h-5 w-5" />
      </Button>
    </div>
  );
};

export default NavBar;
