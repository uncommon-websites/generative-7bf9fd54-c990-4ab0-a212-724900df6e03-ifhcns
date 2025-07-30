<script lang="ts">
	// Types
	import type { Component, Snippet } from "svelte";
	import type { ButtonRootProps } from "bits-ui";
	import { Button } from "bits-ui";

	type Variant = "primary" | "secondary" | "ghost";
	type Size = "sm" | "md" | "lg";

	type Props = ButtonRootProps & {
		variant?: Variant;
		size?: Size;
		children: Snippet;
		iconOnly?: boolean;
		hideLabel?: boolean;
		rounded?: boolean;
		prefix?: Component;
		suffix?: Component;
	};

	// Props
	const {
		variant = "primary",
		size = "md",
		children,
		class: classes = "",
		prefix: Prefix,
		suffix: Suffix,
		iconOnly = false,
		hideLabel = false,
		...rest
	}: Props = $props();

	// Styles
	const variants: Record<Variant, string> = {
		primary: "",
		secondary: "",
		ghost: ""
	};

	const sizes: Record<Size, string> = $derived({
		sm: iconOnly ? "p-1.5 text-sm" : "px-4 py-1.5 rounded text-sm",
		md: iconOnly ? "p-2 text-base" : "px-4.5 py-2 rounded text-base",
		lg: iconOnly ? "p-2.5 text-lg" : "px-5 py-2 rounded-lg text-lg"
	});

	const baseStyles =
		"inline-flex items-center ring-1 ring-white/15 ring-inset justify-center !font-semibold transition ease-out duration-300 focus:outline-none focus:ring-0 active:brightness-[.9] active:scale-[.98] ring-0 gap-3 [touch-action:manipulation]";
</script>

<Button.Root
	{...rest}
	class={[
		baseStyles,
		variants[variant],
		iconOnly && "aspect-square",
		sizes[size],
		"gap-2",
		classes
	]}
	data-variant={variant}
	data-size={size}
>
	{#if Prefix}
		<Prefix />
	{/if}
	<span class:sr-only={hideLabel || iconOnly}>
		{@render children?.()}
	</span>
	{#if Suffix}
		<Suffix />
	{/if}
</Button.Root>
