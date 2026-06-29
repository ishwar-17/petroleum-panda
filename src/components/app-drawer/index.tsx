import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { CSSProperties, FC, ReactNode, useCallback } from "react";

export type DrawerConfig = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  title: string;
  description?: string;
  direction?: "left" | "right" | "top" | "bottom";
  style?: CSSProperties;
  actions: {
    title: string;
    resetForm?: () => void;
    onClick: () => void;
    disabled?: boolean;
  };
};

export type DrawerButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg"
  | null;

export type AppDrawerProps = DrawerConfig & {
  children: ReactNode;
};

const AppDrawer: FC<AppDrawerProps> = ({
  open,
  title,
  description,
  direction,
  style,
  actions,
  children,
  onOpenChange,
}) => {
  const handleOnClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  console.log("open", open);

  return (
    <Drawer
      direction={direction ?? "left"}
      open={open}
      onOpenChange={onOpenChange}
    >
      <DrawerContent style={style}>
        <DrawerHeader className="bg-accent rounded-t-[10px]">
          <div className="flex justify-between items-center gap-2">
            <DrawerTitle className="text-2xl">{title}</DrawerTitle>
            {description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
            <DrawerClose asChild>
              <Button
                variant="outline"
                className=" w-10 h-10 rounded-full bg-[#fa6400] text-white hover:bg-[#fa6400] hover:text-white"
                size="lg"
                onClick={handleOnClose}
              >
                <X size={20} />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        {children}
        <DrawerFooter className="bg-accent">
          <div className="grid grid-cols-2 gap-2.5">
            {actions.resetForm && (
              <Button
                variant="outline"
                className="font-semibold"
                size="lg"
                onClick={actions.resetForm}
              >
                Reset
              </Button>
            )}
            <Button
              onClick={actions.onClick}
              className="bg-[#f2daca3d] font-semibold border-2 border-[#fa6400] text-[#fa6400] hover:bg-[#fa6400] hover:text-white"
              size="lg"
              type="submit"
            >
              {actions.title}
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default AppDrawer;
