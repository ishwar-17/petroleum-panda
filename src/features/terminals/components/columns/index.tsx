"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Terminal } from "@/src/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPinned, MoreHorizontalIcon, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColumnParams } from "@/src/types/common.type";

export const terminalColumns = (columnParams: ColumnParams) => {
  const { onEdit, onDelete } = columnParams;
  return [
    {
      accessorKey: "name",
      header: "Terminal Name",
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <span>{row.original.name}</span>
        </div>
      ),
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
  ] as ColumnDef<Terminal>[];
};
