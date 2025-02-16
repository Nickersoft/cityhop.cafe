<script lang="ts" module>
	import { type VariantProps, cva } from 'class-variance-authority';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { mergeProps } from 'bits-ui';

	export const typographyVariants = cva('normal-case tracking-tight', {
		variants: {
			variant: {
				display: 'font-sans font-semibold',
				headline: 'font-sans font-semibold',
				title: 'font-sans font-semibold',
				body: 'font-sans font-medium',
				label: 'font-sans uppercase font-semibold tracking-widest'
			},
			size: {
				sm: '',
				md: '',
				lg: ''
			},
			align: {
				left: 'text-left',
				center: 'text-center',
				right: 'text-right'
			},
			color: {
				success: 'text-success',
				danger: 'text-danger',
				warn: 'text-warn',
				primary: 'text-primary',
				default: 'text-default',
				subtle: 'text-blue-100',
				muted: 'text-blue-200',
				invert: 'text-invert',
				inherit: 'text-inherit'
			}
		},
		compoundVariants: [
			{
				variant: 'display',
				size: 'lg',
				class: 'tablet:text-[3rem] text-[4.5rem] leading-none'
			},
			{
				variant: 'display',
				size: 'md',
				class: 'text-5xl phone:text-4xl'
			},
			{
				variant: 'display',
				size: 'sm',
				class: 'text-4xl'
			},
			{
				variant: 'headline',
				size: 'lg',
				class: 'text-3xl'
			},
			{
				variant: 'headline',
				size: 'md',
				class: 'text-2xl'
			},
			{
				variant: 'headline',
				size: 'sm',
				class: 'text-xl'
			},
			{
				variant: 'title',
				size: 'lg',
				class: 'text-lg'
			},
			{
				variant: 'title',
				size: 'md',
				class: 'text-base'
			},
			{
				variant: 'title',
				size: 'sm',
				class: 'text-sm font-semibold'
			},
			{
				variant: 'body',
				size: 'lg',
				class: 'text-base'
			},
			{
				variant: 'body',
				size: 'md',
				class: 'text-sm'
			},
			{
				variant: 'body',
				size: 'sm',
				class: 'text-xs'
			},
			{
				variant: 'label',
				size: 'lg',
				class: 'text-sm'
			},
			{
				variant: 'label',
				size: 'md',
				class: 'text-xs'
			},
			{
				variant: 'label',
				size: 'sm',
				class: 'text-2xs'
			}
		],
		defaultVariants: {
			variant: 'body',
			size: 'md',
			color: 'default'
		}
	});

	const tagVariants = cva('', {
		variants: {
			variant: {
				display: '',
				headline: '',
				body: '',
				title: '',
				label: ''
			},
			size: {
				sm: '',
				md: '',
				lg: ''
			}
		},
		defaultVariants: {
			variant: 'body',
			size: 'md'
		},
		compoundVariants: [
			{
				variant: 'display',
				size: 'lg',
				class: 'h1'
			},
			{
				variant: 'display',
				size: 'md',
				class: 'h2'
			},
			{
				variant: 'display',
				size: 'sm',
				class: 'h3'
			},
			{
				variant: 'headline',
				size: 'lg',
				class: 'h4'
			},
			{
				variant: 'headline',
				size: 'md',
				class: 'h5'
			},
			{
				variant: 'headline',
				size: 'sm',
				class: 'h6'
			},
			{
				variant: 'title',
				size: 'lg',
				class: 'h4'
			},
			{
				variant: 'title',
				size: 'md',
				class: 'h5'
			},
			{
				variant: 'title',
				size: 'sm',
				class: 'h6'
			},
			{
				variant: 'body',
				size: 'lg',
				class: 'p'
			},
			{
				variant: 'body',
				size: 'md',
				class: 'p'
			},
			{
				variant: 'body',
				size: 'sm',
				class: 'p'
			},
			{
				variant: 'label',
				size: 'lg',
				class: 'span'
			},
			{
				variant: 'label',
				size: 'md',
				class: 'span'
			},
			{
				variant: 'label',
				size: 'sm',
				class: 'span'
			}
		]
	});

	export type TypographyProps = SvelteHTMLElements['p'] &
		VariantProps<typeof typographyVariants> & {
			as?: string;
			child?: Snippet<[{ props: Record<string, unknown> }]>;
		};
</script>

<script>
	const {
		variant,
		children,
		class: className,
		size,
		color,
		align,
		child,
		as,
		...props
	}: TypographyProps = $props();

	const tag = $derived(as ?? tagVariants({ variant, size }));
	const classes = $derived(cn(typographyVariants({ variant, align, color, size }), className));
	const allProps = $derived(mergeProps({ class: classes }, props));
</script>

{#if child}
	{@render child({ props: allProps })}
{:else}
	<svelte:element this={tag} {...allProps}>
		{@render children?.()}
	</svelte:element>
{/if}
