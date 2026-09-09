import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-extrabold uppercase tracking-wide transition-[color,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        cta: "bg-cta text-cta-foreground shadow-[4px_4px_0_var(--headline)] hover:-translate-y-0.5 hover:text-secondary-accent hover:shadow-[6px_6px_0_var(--headline)]",
        ghost: "text-headline underline decoration-primary-accent decoration-2 underline-offset-4 hover:text-primary-accent",
        outline: "border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] hover:bg-secondary-accent",
      },
      size: {
        default: "min-h-12 px-6",
        large: "min-h-14 px-8 text-lg",
        icon: "size-12 p-0",
      },
    },
    defaultVariants: { variant: "cta", size: "default" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };