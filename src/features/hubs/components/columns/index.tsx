"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Hub } from "@/src/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCheck,
  Copy,
  MapPinned,
  MoreHorizontalIcon,
  Pencil,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import classNames from "classnames";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getAvatarColor, getInitials } from "@/src/utils";
import { ColumnParams } from "@/src/types/common.type";

export const hubColumns = (columnParams: ColumnParams) => {
  const { onEdit, onDelete } = columnParams;
  return [
    {
      accessorKey: "code",
      header: "Code",
    },
    {
      accessorKey: "name",
      header: "Hub Name",
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => <span>{row.original.type.toUpperCase()}</span>,
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      id: "diesel",
      header: "Diesel",
      cell: ({ row }) => row.original.inventory.diesel.toLocaleString(),
    },
    {
      id: "petrol",
      header: "Petrol",
      cell: ({ row }) => row.original.inventory.petrol.toLocaleString(),
    },
    {
      accessorKey: "contactDetail",
      header: "Contact Details",
      cell: ({ row }) => {
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="w-8 h-8 m-auto shadow">
                <AvatarFallback
                  style={{
                    backgroundColor: getAvatarColor(row.original.contactPerson),
                  }}
                  className="text-white text-[11px] font-semibold"
                >
                  {getInitials(row.original.contactPerson)}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex justify-center flex-col gap-1.5">
                <div>
                  <strong>Full Name - </strong>
                  {row.original.contactPerson}
                </div>
                <div>
                  <strong>Mobile - </strong>
                  {row.original.contactNumber}
                  <Button variant="link" className="text-[#fa6400]" size="xs">
                    <Copy />
                  </Button>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        );
      },
    },
    {
      id: "coordinates",
      header: "Coordinates",
      cell: ({ row }) => (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-[#fa6400]/60 hover:text-white"
              size="icon-sm"
            >
              <MapPinned className="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex gap-2">
              <span>
                <strong>Lat - </strong>
                {row.original.coordinates.lat}
              </span>{" "}
              <span>
                <strong>Lng - </strong>
                {row.original.coordinates.lng}
              </span>
            </div>
          </TooltipContent>
        </Tooltip>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge
          className={classNames({
            "bg-green-100": row.original.status === "active",
            "bg-red-100": row.original.status !== "active",
          })}
        >
          <BadgeCheck data-icon="inline-start" />
          {row.original.status.toUpperCase()}
        </Badge>
      ),
    },
    {
      accessorKey: "action",
      header: "Actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontalIcon />
              <span className="sr-only">Open Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit?.(row.original.id)}>
              <Pencil /> Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => onDelete(row.original.id)}
            >
              <Trash2 /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ] as ColumnDef<Hub>[];
};
