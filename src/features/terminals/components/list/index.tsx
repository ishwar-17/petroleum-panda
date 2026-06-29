import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DataGrid,
  DataGridColumnToggle,
  DataGridPagination,
  DataGridToolbar,
  useDataGrid,
} from "@/src/components/data-grid";
import PageHeading from "@/src/components/page-heading";
import {
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { terminalColumns } from "../columns";
import {
  useDeleteTerminal,
  useFetchAllTerminals,
} from "@/src/data-query/terminals";
import { PanelLeftClose } from "lucide-react";
import useDrawerSotore from "@/src/store/drawerStore";

export const TerminalList = () => {
  const { data: terminals, isLoading: loading } = useFetchAllTerminals();
  const { mutate: terminalDelete } = useDeleteTerminal();
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
    return terminalColumns({
      onDelete: (id) => terminalDelete(id),
    });
  }, [terminalDelete]);

  const table = useDataGrid({
    data: terminals,
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
        <PageHeading heading="Terminals">
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
              <PanelLeftClose size={20} /> Create Terminal
            </Button>
          </div>
        </PageHeading>
      </div>

      <DataGrid table={table} />

      <DataGridPagination table={table} />
    </div>
  );
};
