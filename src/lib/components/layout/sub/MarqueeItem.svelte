<script lang="ts">
	// Types
	import type { Snippet } from "svelte";

	// Utils
	import { fade } from "svelte/transition";

	// Props
	const {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="h-full px-7" in:fade>
	<div class="relative h-full">
		{@render children?.()}
	</div>
</div>
