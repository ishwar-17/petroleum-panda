import {
  ColumnDef,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  PaginationState,
  RowSelectionState,
  OnChangeFn,
} from "@tanstack/react-table";

export interface DataGridProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];

  sorting: SortingState;
  onSortingChange: OnChangeFn<SortingState>;

  columnFilters: ColumnFiltersState;
  onColumnFiltersChange: OnChangeFn<ColumnFiltersState>;

  columnVisibility: VisibilityState;
  onColumnVisibilityChange: OnChangeFn<VisibilityState>;

  rowSelection: RowSelectionState;
  onRowSelectionChange: OnChangeFn<RowSelectionState>;

  pagination: PaginationState;
  onPaginationChange: OnChangeFn<PaginationState>;

  totalRows?: number;

  manualPagination?: boolean;
  manualSorting?: boolean;
  manualFiltering?: boolean;
}