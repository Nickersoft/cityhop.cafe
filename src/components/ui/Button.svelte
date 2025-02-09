<script lang="ts" module>
	export const buttonVariants = cva(
		'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
					destructive:
						'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
					outline:
						'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-primary tracking-widest font-semibold text-xs uppercase opacity-80 underline-offset-4 hover:opacity-100'
				},
				size: {
					default: 'h-9 px-4 py-2',
					sm: 'h-8 rounded-md px-3 text-xs',
					lg: 'h-10 rounded-md px-8',
					icon: 'h-9 w-9 [&_svg]:size-6'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	export type ButtonProps = SvelteHTMLElements['button'] &
		VariantProps<typeof buttonVariants> & {
			as?: string;
		};
</script>

<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { cn } from '$lib/utils';

	const {
		variant,
		size,
		as = 'button',
		children,
		class: className,
		...props
	}: ButtonProps = $props();
</script>

<svelte:element this={as} class={cn(buttonVariants({ variant, size, className }))} {...props}>
	{@render children?.()}
</svelte:element>
