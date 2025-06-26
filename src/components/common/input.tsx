import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = {
	className?: ComponentProps<'input'>['className'];
} & ComponentProps<'input'>

export default function Input({ className, ...props }: Props) {
	return (
    <input type="text" className={cn('px-4 py-2 bg-background text-foreground rounded-md border border-border outline-none focus:outline-none focus:ring-0', className)} {...props} />
	)
}