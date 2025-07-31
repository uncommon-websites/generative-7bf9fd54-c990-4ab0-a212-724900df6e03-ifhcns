<script lang="ts">
	// Props
	const {
		title = "See the difference",
		beforeTitle = "Traditional methods",
		afterTitle = "With Squint",
		beforeItems = [],
		afterItems = [],
		imageSrc,
		...rest
	}: {
		title?: string;
		beforeTitle?: string;
		afterTitle?: string;
		beforeItems?: string[];
		afterItems?: string[];
		imageSrc?: string;
		[key: string]: any;
	} = $props();
</script>

<section class="section-px section-py container mx-auto" {...rest}>
	<div class="grid lg:grid-cols-2 gap-12 items-center">
		<div>
			<h2 class="text-title2 mb-8">{title}</h2>
			<div class="grid gap-8">
				<div>
					<h3 class="text-headline font-semibold mb-4 text-muted-foreground">{beforeTitle}</h3>
					<ul class="space-y-3 text-body">
						{#each beforeItems as item}
							<li class="flex items-start gap-3">
								<span class="text-muted-foreground">•</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="text-headline font-semibold mb-4 text-primary">{afterTitle}</h3>
					<ul class="space-y-3 text-body">
						{#each afterItems as item}
							<li class="flex items-start gap-3">
								<span class="text-primary">✓</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		{#if imageSrc}
			<div class="relative">
				<img 
					src={imageSrc}
					alt="Visual comparison"
					class="rounded-xl shadow-lg w-full"
				/>
			</div>
		{/if}
	</div>
</section>