<script lang="ts">
	// Props
	const {
		title,
		description,
		imageSrc,
		imageAlt = "Visual representation",
		imagePosition = "right",
		...rest
	}: {
		title: string;
		description: string;
		imageSrc?: string;
		imageAlt?: string;
		imagePosition?: "left" | "right";
		[key: string]: any;
	} = $props();
</script>

<section class="section-px section-py container mx-auto" {...rest}>
	<div class="grid lg:grid-cols-2 gap-12 items-center">
		{#if imageSrc && imagePosition === "left"}
			<div class="relative order-2 lg:order-1">
				<img 
					src={imageSrc}
					alt={imageAlt}
					class="rounded-xl shadow-lg w-full"
				/>
			</div>
		{/if}
		
		<div class="order-1 lg:order-{imagePosition === 'left' ? '2' : '1'}">
			<h2 class="text-title1 mb-6">{title}</h2>
			<p class="text-headline text-muted-foreground leading-relaxed">
				{description}
			</p>
		</div>
		
		{#if imageSrc && imagePosition === "right"}
			<div class="relative order-2">
				<img 
					src={imageSrc}
					alt={imageAlt}
					class="rounded-xl shadow-lg w-full"
				/>
			</div>
		{/if}
	</div>
</section>