"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Driver } from "@/src/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, MoreHorizontalIcon, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getAvatarColor, getInitials } from "@/src/utils";
import { Badge } from "@/components/ui/badge";
import { ColumnParams } from "@/src/types/common.type";

export const driverColumns = (columnParams: ColumnParams) => {
  const { onEdit, onDelete } = columnParams;
  return [
    {
      accessorKey: "name",
      header: "Driver Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 shadow">
            <AvatarFallback
              style={{
                backgroundColor: getAvatarColor(row.original.name),
              }}
              className="text-white text-[11px] font-semibold"
            >
              {getInitials(row.original.name)}
            </AvatarFallback>
          </Avatar>
          <span>{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "license",
      header: "License",
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-0.5">
          <Badge className="bg-[#d5d6d7]">{row.original.license}</Badge>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="w-6 h-6 rounded-full bg-transparent hover:bg-[#fa6400]/50 hover:text-white"
                size="xs"
              >
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy License</TooltipContent>
          </Tooltip>
        </div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Contact Number",
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-1">
          <span>{row.original.phone}</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="w-6 h-6 rounded-full bg-transparent hover:bg-[#fa6400]/50 hover:text-white"
                size="xs"
              >
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy Contact number</TooltipContent>
          </Tooltip>
        </div>
      ),
    },
    {
      accessorKey: "address",
      header: "Address",
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
  ] as ColumnDef<Driver>[];
};
