"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>;
  searchColumn?: string;
}

export const DataGridToolbar = <TData,>({
  table,
  searchColumn,
}: Props<TData>) => {
  return (
    <div className="flex w-full items-center gap-4">
      {searchColumn && (
        <Field className="w-60">
          <Input
            id="search-by-name"
            type="text"
            placeholder="Search by name..."
            value={
              (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""
            }
            onChange={(e) =>
              table.getColumn(searchColumn)?.setFilterValue(e.target.value)
            }
          />
        </Field>
        // <input
        //   className="rounded border px-3 py-2"
        //   placeholder="Search by name..."
        //   value={
        //     (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""
        //   }
        //   onChange={(e) =>
        //     table.getColumn(searchColumn)?.setFilterValue(e.target.value)
        //   }
        // />
      )}
    </div>
  );
};
