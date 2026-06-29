import { FC, ReactNode } from "react";

export type PageHeadingProps = {
  heading: string;
  subHeading?: string;
  children: ReactNode;
};

const PageHeading: FC<PageHeadingProps> = ({
  heading,
  subHeading,
  children,
}) => {
  return (
    <div className="flex items-center w-full bg-whilte shadow px-4 py-2 rounded-sm">
      <div className="flex justify-between w-full">
        <h1 className="text-[20px] font-semibold">{heading}</h1>
        {subHeading && <span>{subHeading}</span>}
      </div>
      {children}
    </div>
  );
};

export default PageHeading;
