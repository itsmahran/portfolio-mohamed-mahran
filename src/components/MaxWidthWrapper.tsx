import { cn } from "@/lib/utils";
import { FunctionComponent, ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: String;
}

const MaxWidthWrapper: FunctionComponent<MaxWidthWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1440px]", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
