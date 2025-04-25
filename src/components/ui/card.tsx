import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-background border border-border rounded-xl shadow-md p-6 flex flex-col gap-2", 
        className
      )}
      {...props}
    />
  );
} 