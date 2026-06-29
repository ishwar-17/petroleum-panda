"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MapPinned,
  Truck,
  UserRound,
  Panda,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import classNames from "classnames";

function Brand() {
  const { state, open } = useSidebar();

  return (
    <div
      className={classNames("flex items-center px-2.5 py-2.5 rounded-full", {
        "border-l-4 border-r-4 border-l-[#fa6400] border-r-[#fa6400]": open,
        "gap-2 bg-accent": open,
        "justify-center bg-[#fa6400] w-10 h-10": !open,
      })}
    >
      <Panda
        className={classNames("h-5 w-5 shrink-0", {
          "text-[#fa6400]": open,
          "text-white": !open,
        })}
      />

      {state === "expanded" && (
        <div className="truncate">
          <span className="font-semibold text-[#fa6400]">Fleet</span>
          <span className="font-semibold">Panda</span>
        </div>
      )}
    </div>
  );
}

const sideMenuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard />,
    url: "/",
  },
  {
    id: 2,
    title: "Hubs",
    icon: <MapPinned />,
    url: "/admin/hubs",
  },
  {
    id: 3,
    title: "Drivers",
    icon: <UserRound />,
    url: "/admin/drivers",
  },
  {
    id: 4,
    title: "Vehicles",
    icon: <Truck />,
    url: "/admin/vehicles",
  },
  {
    id: 5,
    title: "Terminals",
    icon: <MapPinned />,
    url: "/admin/terminals",
  },
];

export function AppSidebar() {
  const { state } = useSidebar();

  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      {/* Sticky Brand */}
      <SidebarHeader className="sticky top-0 z-20 bg-sidebar">
        <SidebarMenu>
          <SidebarMenuItem
            className={classNames({
              "flex justify-center": state !== "expanded",
            })}
          >
            <Brand />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="flex flex-col gap-2.5 p-2.5">
          {sideMenuItems.map((menu) => (
            <SidebarMenuItem
              key={menu.id}
              className={classNames({
                "flex justify-center": state !== "expanded",
              })}
            >
              <SidebarMenuButton
                asChild
                tooltip={menu.title}
                isActive={pathname === menu.url}
                className="bg-transparent! hover:bg-[#fa6400]/10! hover:text-black! data-[active=true]:bg-[#fa6400]/80!
                data-[active=true]:text-white! data-[active=true]:font-semibold!"
              >
                <Link href={menu.url}>
                  {menu.icon}
                  {state === "expanded" && <span>{menu.title}</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem
            className={classNames({
              "flex justify-center": state !== "expanded",
            })}
          >
            <SidebarMenuButton
              tooltip="Profile"
              className="bg-transparent! hover:bg-accent!"
            >
              <User2 />
              <span>Ishwar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
