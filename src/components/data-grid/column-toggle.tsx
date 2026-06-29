"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Table } from "@tanstack/react-table";
import { ChevronDown, Columns2 } from "lucide-react";

interface Props<TData> {
  table: Table<TData>;
}

export const DataGridColumnToggle = <TData,>({ table }: Props<TData>) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-[#fa6400]/80 hover:text-white"
            size="lg"
          >
            <Columns2 /> Customize Columns <ChevronDown size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-95">
          <div className="grid grid-cols-2 gap-2.5">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <Field orientation="horizontal" key={column.id}>
                  <Checkbox
                    id={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(checked) => {
                      console.log("cchecked", checked);
                      column.toggleVisibility(!!checked);
                    }}
                    className="border-[#fa6400] data-[state=checked]:bg-[#fa6400]/20 w-5 h-5"
                  />
                  <FieldLabel
                    htmlFor={column.id}
                    className="font-semibold text-[#676a6c]"
                  >
                    {typeof column.columnDef.header === "string"
                      ? column.columnDef.header
                      : column.id}
                  </FieldLabel>
                </Field>
              ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
