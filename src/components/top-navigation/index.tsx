"use client";

import {
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import classNames from "classnames";
import { BellDot, Moon } from "lucide-react";
import { FC } from "react";

const TopNavigation: FC = () => {
  const { state } = useSidebar();
  const actionButtons = [
    {
      id: 1,
      icon: <BellDot />,
      title: "Notifications",
    },
    {
      id: 2,
      icon: <Moon />,
      title: "Mode",
    },
  ];

  return (
    <div className="flex justify-between px-2 py-2 border-b sticky top-0 z-10 bg-white shadow shadow-accent">
      <div
        className={classNames("flex items-center", {
          "justify-start": state === "expanded",
          "justify-between gap-1.5": state !== "expanded",
        })}
      >
        <SidebarTrigger />
        {state !== "expanded" && (
          <div className="truncate">
            <span className="font-semibold text-[#fa6400]">Fleet</span>
            <span className="font-semibold">Panda</span>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-2">
        {actionButtons.map((action) => (
          <SidebarMenuButton
            key={action.id}
            asChild
            tooltip={action.title}
            className="bg-transparent! hover:bg-[#fa6400]/80! hover:text-white! cursor-pointer"
          >
            <button>{action.icon}</button>
          </SidebarMenuButton>
        ))}
      </div>
    </div>
  );
};

export default TopNavigation;
