"use client";

import { Table } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>;
}

export const DataGridPagination = <TData,>({ table }: Props<TData>) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span>Page {table.getState().pagination.pageIndex + 1}</span>

      <div className="flex gap-2">
        <button
          className="rounded border px-3 py-2"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous
        </button>

        <button
          className="rounded border px-3 py-2"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};
