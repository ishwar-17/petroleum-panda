"use client";

import { useMemo, useState } from "react";

import {
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  RowSelectionState,
} from "@tanstack/react-table";

import {
  DataGrid,
  DataGridToolbar,
  DataGridPagination,
  DataGridColumnToggle,
  useDataGrid,
} from "@/src/components/data-grid";

import { hubColumns } from "../columns";
import { useDeleteHub, useFetchAllHubs } from "@/src/data-query/hubs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import PageHeading from "@/src/components/page-heading";
import { Separator } from "@/components/ui/separator";
import useDrawerSotore from "@/src/store/drawerStore";
import { PanelLeftClose } from "lucide-react";

export const HubList = () => {
  const { data: hubs, isLoading: loading } = useFetchAllHubs();
  const { mutate: hubDelete } = useDeleteHub();

  const onOpenFormDrawer = useDrawerSotore((state) => state.onOpenFormDrawer);

  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo(() => {
    return hubColumns({
      onDelete: (id) => hubDelete(id),
    });
  }, [hubDelete]);

  const table = useDataGrid({
    data: hubs,
    columns,

    sorting,
    onSortingChange: setSorting,

    columnFilters,
    onColumnFiltersChange: setColumnFilters,

    columnVisibility,
    onColumnVisibilityChange: setColumnVisibility,

    rowSelection,
    onRowSelectionChange: setRowSelection,

    pagination,
    onPaginationChange: setPagination,
  });

  if (loading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <PageHeading heading="Hubs">
          <div className="flex justify-between items-center gap-4">
            <DataGridToolbar table={table} searchColumn="name" />
            <DataGridColumnToggle table={table} />
            <Separator
              orientation="vertical"
              className="bg-gray-200! h-10 w-0.5"
            />
            <Button
              variant="outline"
              className="bg-transparent text-[#fa6400] border-[#fa6400]/80 hover:bg-[#fa6400] hover:text-white"
              size="lg"
              onClick={() => onOpenFormDrawer(true)}
            >
              <PanelLeftClose size={20} /> Create Hub
            </Button>
          </div>
        </PageHeading>
      </div>

      <DataGrid table={table} />

      <DataGridPagination table={table} />
    </div>
  );
};
