<script lang="ts">
	// Props
	const {
		title,
		content,
		imageSrc = ""
	}: { title: string; content: string; imageSrc?: string } = $props();
</script>

<section class="px container mx-auto grid gap-12 py-40">
	<h2 class="text-title1 max-w-prose">
		{title}
	</h2>

	{#if imageSrc}
		<img src={imageSrc} alt={title} class="aspect-video w-full rounded-lg bg-gray-200" />
	{/if}

	<div class="columns-1 gap-6 text-gray-800 sm:columns-3">
		<p class="text-body">
			{content}
		</p>
	</div>
</section>
