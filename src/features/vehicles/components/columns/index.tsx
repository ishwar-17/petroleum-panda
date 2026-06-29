"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Vehicle } from "@/src/types";
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
import { Badge } from "@/components/ui/badge";
import { ColumnParams } from "@/src/types/common.type";

export const vehicleColumns = (columnParams: ColumnParams) => {
  const { onEdit, onDelete } = columnParams;
  return [
    {
      accessorKey: "registration",
      header: "Registration",
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-0.5">
          <Badge className="bg-[#d5d6d7]">{row.original.registration}</Badge>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="w-6 h-6 rounded-full bg-transparent hover:bg-[#fa6400]/50 hover:text-white"
                size="xs"
              >
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy Registration</TooltipContent>
          </Tooltip>
        </div>
      ),
    },
    {
      accessorKey: "capacity",
      header: "Capacity",
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => <span>{row.original.type.toUpperCase()}</span>,
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
  ] as ColumnDef<Vehicle>[];
};
