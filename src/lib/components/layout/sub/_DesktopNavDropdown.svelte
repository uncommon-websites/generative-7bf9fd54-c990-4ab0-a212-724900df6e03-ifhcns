<script lang="ts">
	// Types
	import type { NavItem } from "$lib/navigation";
	// Components
	import { NavigationMenu } from "bits-ui";
	import IconChevronDown from "~icons/lucide/chevron-down";

	// Props
	let { item }: { item: NavItem } = $props();

	// State
	let activeImageIndex = $state(0);
	// Determine if any children have images
	let hasImages = $derived((item.children ?? []).some((child) => !!child.image));

	function setActiveImageIndex(index: number) {
		activeImageIndex = index;
	}
</script>

<NavigationMenu.Trigger class="group/item inline-flex h-full items-center gap-1">
	{item.label}
	<IconChevronDown
		class="relative top-[1px] size-3 opacity-80 transition duration-200 ease-out group-hover/item:opacity-100 group-data-[state=open]:rotate-180 "
		aria-hidden="true"
	/>
</NavigationMenu.Trigger>

<NavigationMenu.Content
	class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left top-0 left-0 w-max data-[state=closed]:hidden "
	forceMount
>
	<div class={["grid min-w-40 gap-(--gap) p-(--gap)", hasImages && "grid-cols-2 items-start"]}>
		{#if hasImages}
			<div
				class="relative grid aspect-square size-full max-h-full max-w-84 overflow-hidden rounded-(--inner-radius) bg-gray-100"
			>
				{#each item.children ?? [] as child, index}
					<img
						src={child.image}
						alt=""
						class="grid-center inset-0 size-full object-cover transition duration-300 ease-out"
						class:opacity-100={index === activeImageIndex}
						class:opacity-0={index !== activeImageIndex}
					/>
				{/each}
			</div>
		{/if}
		<ul class="grid w-full list-none content-start items-start">
			{#each item.children ?? [] as child, index}
				<li
					class="w-full"
					onmouseover={() => setActiveImageIndex(index)}
					onfocus={() => setActiveImageIndex(index)}
				>
					<NavigationMenu.Link
						href={child.href}
						class="link hover:bg-muted grid max-w-full grid-flow-row rounded-(--inner-radius) px-3.5 py-3 leading-none font-medium no-underline outline-hidden transition-colors select-none"
						><div class="grid max-h-[4em] max-w-[30ch] gap-2 leading-6 text-ellipsis">
							<span class="inline-block">{child.label}</span>

							{#if child.description}
								<span class="text-muted-foreground inline-block max-h-[2em] truncate text-ellipsis"
									>{child.description}</span
								>
							{/if}
						</div>
					</NavigationMenu.Link>
				</li>
			{/each}
		</ul>
	</div>
</NavigationMenu.Content>
