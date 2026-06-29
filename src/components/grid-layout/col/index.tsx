// components/ui/column.tsx
import { cn } from "@/lib/utils";
import { ColumnProps } from "@/src/types/common.type";

export function Col({
  children,
  size = 12,
  className,
  padding,
  margin,
}: ColumnProps) {
  return (
    <div
      style={{
        width: `${(size / 12) * 100}%`,
      }}
      className={cn("shrink-0 px-2", padding, margin, className)}
    >
      {children}
    </div>
  );
}
