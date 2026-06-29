// components/ui/row.tsx
import { cn } from "@/lib/utils";
import { RowProps } from "@/src/types/common.type";

export function Row({ children, className }: RowProps) {
  return (
    <div className={cn("flex flex-wrap -mx-2", className)}>{children}</div>
  );
}
