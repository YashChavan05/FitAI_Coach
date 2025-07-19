
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass dark:glass-dark rounded-2xl p-6 transition-all duration-300",
        hover && "hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20",
        className
      )}
    >
      {children}
    </div>
  );
}
