<script lang="ts" module>
	export type { ToggleRootProps as ToggleProps } from 'bits-ui';
</script>

<script lang="ts">
	import { Toggle, type ToggleRootProps } from 'bits-ui';
	import { cva, type VariantProps } from 'class-variance-authority';

	import { cn } from '$lib/utils';

	const toggleVariants = cva(
		'ring-offset-background active:opacity-50 transition-opacity duration-150 focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		{
			variants: {
				variant: {
					default: 'bg-transparent',
					outline: 'border-input hover:bg-accent hover:text-accent-foreground border bg-transparent'
				},
				size: {
					default: 'h-10 px-3',
					sm: 'h-9 px-2.5',
					lg: 'h-11 px-5'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	type Props = ToggleRootProps & VariantProps<typeof toggleVariants>;

	let { pressed = $bindable(), variant, size, class: className, ...props }: Props = $props();
</script>

<Toggle.Root bind:pressed class={cn(toggleVariants({ variant, size, className }))} {...props} />
