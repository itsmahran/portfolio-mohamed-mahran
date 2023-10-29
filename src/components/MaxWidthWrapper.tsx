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
    <div className={cn("mx-auto w-full max-w-screen-2xl px-2.5 md:px-20", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
