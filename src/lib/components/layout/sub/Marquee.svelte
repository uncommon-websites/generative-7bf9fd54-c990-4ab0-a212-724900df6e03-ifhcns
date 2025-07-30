<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		speed?: number;
		shadow?: boolean;
		children?: Snippet;
		class?: string;
	};

	let { children, class: classes }: Props = $props();
</script>

<div class="relative flex w-full max-w-full items-center {classes}">
	<div class="relative flex w-full max-w-full flex-nowrap overflow-hidden py-6">
		<div class="marquee flex w-max flex-nowrap [--duration:60s]">
			{@render children?.()}
			{@render children?.()}
		</div>
	</div>
</div>

<style lang="postcss">
	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}

	.marquee {
		animation: marquee var(--duration, 50s) linear infinite;
	}
</style>
