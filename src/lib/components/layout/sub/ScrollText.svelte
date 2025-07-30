<!--
@component
    Use this component to show text that animates in as users scroll

    Usage:
    ```html
    <ScrollText
      text="This component showcases your most important benefit with a smooth animation effect as users scroll"
    />
    ```

    Props:
    - `title`: A summary hint about the benefit (sentence case)
    - `text`: Main benefit statement, concise and impactful
    - `centered`: Boolean indicating whether the summary should be centered
-->

<script lang="ts">
	// Utils
	import { scroll, animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Props
	const {
		text,
		class: classes = ""
	}: {
		text: string;
		class?: string;
	} = $props();

	// State
	let words = $derived(text.split(" "));
	let containerElement: HTMLDivElement;

	onMount(() => {
		if (!containerElement) return;
		if (window.self !== window.top) return;

		// Get all word elements as an array
		const wordElements = Array.from(containerElement.querySelectorAll(".word"));

		const sequence: any = [
			[
				wordElements,
				{
					opacity: [0, 0, 1],
					y: ["1em", 0],
					filter: ["blur(12px)", "blur(8px) brightness(250%)", "blur(0px)"]
				},
				{
					at: "0",
					delay: stagger(0.015),
					ease: "easeInOut"
				}
			]
		];

		scroll(animate(sequence), {
			target: containerElement,
			offset: ["start end", "center center"]
		});
	});
</script>

<div bind:this={containerElement} class={classes}>
	<span class="inline-block">
		{#each words as word}
			<span>
				<span class="word relative inline-block transition duration-150 ease-out">{word}</span>{" "}
			</span>
		{/each}
	</span>
</div>
