<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	import { cn } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const stackVariants = cva('flex', {
		variants: {
			orientation: {
				column: 'flex-col',
				row: 'flex-row'
			},
			reverse: {
				true: '',
				false: ''
			},
			centered: {
				true: '!justify-center !items-center',
				false: ''
			},
			align: {
				start: 'items-start',
				center: 'items-center',
				end: 'items-end',
				stretch: 'items-stretch',
				baseline: 'items-baseline'
			},
			justify: {
				normal: 'justify-normal',
				start: 'justify-start',
				center: 'justify-center',
				end: 'justify-end',
				between: 'justify-between',
				around: 'justify-around',
				evenly: 'justify-evenly',
				stretch: 'justify-stretch'
			},
			gap: {
				none: '',
				sm: 'gap-2',
				md: 'gap-4',
				lg: 'gap-8'
			},
			wrap: {
				true: 'flex-wrap',
				false: ''
			}
		},
		compoundVariants: [
			{
				orientation: 'column',
				reverse: true,
				className: 'flex-col-reverse'
			},
			{
				orientation: 'row',
				reverse: true,
				className: 'flex-row-reverse'
			}
		],
		defaultVariants: {
			wrap: false,
			orientation: 'column',
			align: 'start',
			justify: 'start',
			gap: 'md'
		}
	});

	type Props = SvelteHTMLElements['div'] &
		VariantProps<typeof stackVariants> & {
			as?: string;
		};

	const {
		orientation,
		align,
		justify,
		gap,
		wrap,
		centered,
		reverse,
		class: className,
		children,
		as = 'div',
		...props
	}: Props = $props();
</script>

<svelte:element
	this={as}
	{...props}
	class={cn(
		stackVariants({
			centered,
			wrap,
			reverse,
			orientation,
			align,
			justify,
			gap
		}),
		className
	)}
>
	{@render children?.()}
</svelte:element>
