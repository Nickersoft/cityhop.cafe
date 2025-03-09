<script lang="ts">
	import { Slider, type SliderSingleRootProps } from 'bits-ui';

	import { cn } from '$lib/utils';

	interface Props extends Omit<SliderSingleRootProps, 'type'> {
		value: number;
	}

	let { class: className, value = $bindable(), ...props }: Props = $props();
</script>

<div class="w-full md:max-w-[280px]">
	<Slider.Root
		{...props}
		type="single"
		bind:value
		class={cn(
			'relative flex w-full touch-none items-center transition-all duration-300 select-none data-disabled:opacity-20',
			className
		)}
	>
		{#snippet children()}
			<span class="bg-accent relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full">
				<Slider.Range class="bg-foreground absolute h-full" />
			</span>
			<Slider.Thumb
				index={0}
				class={cn(
					'border-border-input bg-background hover:border-dark-40 focus-visible:ring-foreground dark:bg-foreground dark:shadow-card block size-5 cursor-pointer rounded-full border shadow transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-98 disabled:pointer-events-none disabled:opacity-50'
				)}
			/>
		{/snippet}
	</Slider.Root>
</div>
