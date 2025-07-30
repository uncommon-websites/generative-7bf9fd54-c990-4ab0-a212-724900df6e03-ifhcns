<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";

	// Props
	let {
		title = "",
		subtitle = "",
		oncomplete = () => {},
		size = "sm"
	}: {
		title: string;
		subtitle: string;
		oncomplete?: () => void;
		size?: "sm" | "lg";
	} = $props();
</script>

<div
	class={[
		"section-pb-sm container-sm grid text-balance",
		size === "lg" ? "text-display" : "text-title2"
	]}
>
	<h2>
		<AnimateText text={title} {oncomplete} />
	</h2>
	<p class="text-emphasis-dim">
		<AnimateText text={subtitle} />
	</p>
</div>
