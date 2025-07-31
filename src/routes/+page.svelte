<script lang="ts">
	// Components
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import ComparisonSection from "$lib/components/layout/ComparisonSection.svelte";
	import Stats from "$lib/components/layout/Stats.svelte";
	import ValueStatement from "$lib/components/layout/ValueStatement.svelte";
	
	// Icons
	import RecordIcon from "~icons/lucide/video";
	import SearchIcon from "~icons/lucide/search";
	import UsersIcon from "~icons/lucide/users";
	import LayersIcon from "~icons/lucide/layers";
	import ShieldCheckIcon from "~icons/lucide/shield-check";
	import MousePointerClickIcon from "~icons/lucide/mouse-pointer-click";
	import ClockIcon from "~icons/lucide/clock";
	import TrendingDownIcon from "~icons/lucide/trending-down";
	import WorkflowIcon from "~icons/lucide/workflow";
	
	// Data
	const competitorLogos = [
		"https://logo.clearbit.com/notion.so",
		"https://logo.clearbit.com/atlassian.com",
		"https://logo.clearbit.com/getguru.com",
		"https://logo.clearbit.com/slab.com",
		"https://logo.clearbit.com/obsidian.md"
	];
	
	const features = [
		{
			title: "Record any process in seconds",
			description: "Just hit record while doing the task—Squint turns it into step-by-step visuals with no editing required.",
			icon: RecordIcon,
			iconClass: "text-primary"
		},
		{
			title: "Turn know-how into searchable knowledge",
			description: "Squint automatically indexes clips so your team can find and follow processes instantly.",
			icon: SearchIcon,
			iconClass: "text-primary"
		},
		{
			title: "Train new hires without slowing down",
			description: "Reduce onboarding from weeks to minutes with job-ready clips that show exactly what to do.",
			icon: UsersIcon,
			iconClass: "text-primary"
		},
		{
			title: "Standardize your process across shifts",
			description: "Capture and maintain consistent instructions so work gets done the same way—every time.",
			icon: LayersIcon,
			iconClass: "text-primary"
		},
		{
			title: "Avoid bottlenecks when people are out",
			description: "Teams keep moving even when experts are unavailable—because the process is already captured.",
			icon: ShieldCheckIcon,
			iconClass: "text-primary"
		},
		{
			title: "One click input, zero friction output",
			description: "No logins, installs, or complex tools. Works across devices with zero setup.",
			icon: MousePointerClickIcon,
			iconClass: "text-primary"
		}
	];
	
	const testimonials = [
		{
			name: "Michael Chen",
			position: "Plant Operations Manager",
			company: "Automotive Manufacturer",
			quote: "We used to shadow people for weeks just to learn the job. With Squint, you watch a 4-minute clip and get started.",
			image: "/static/generated/image-a-portrait-of-an-experienced-male-produc.webp"
		},
		{
			name: "Sarah Rodriguez",
			position: "Operations Lead",
			company: "Electronics Assembly",
			quote: "People finally stop asking the same questions. It's all searchable now, so they just get what they need.",
			image: "/static/generated/image-a-confident-female-factory-supervisor-ca.webp"
		},
		{
			name: "David Thompson",
			position: "Facilities Manager",
			company: "Consumer Goods",
			quote: "Processes used to pause when someone was off. With Squint, the knowledge is always there—even if the person isn't.",
			image: "/static/generated/image-a-portrait-of-a-smiling-manufacturing-op.webp"
		}
	];
	
	const stats = [
		{
			value: "4 minutes",
			description: "Average time to capture a process",
			icon: ClockIcon
		},
		{
			value: "87% faster",
			description: "New hire onboarding time",
			icon: TrendingDownIcon
		},
		{
			value: "10,000+",
			description: "Workflows captured and counting",
			icon: WorkflowIcon
		}
	];
</script>

<svelte:head>
	<title>Squint - Capture Tribal Knowledge Instantly</title>
	<meta name="description" content="Transform workplace expertise into searchable visual instructions. Squint helps manufacturing teams capture and share knowledge instantly." />
</svelte:head>

<!-- Hero Section -->
<Hero
	title="The fastest way to capture what your team knows"
	subtitle="Tribal knowledge shouldn't disappear when people do"
	imageSrc="/static/generated/image-a-manufacturing-worker-in-a-factory-sett.webp"
	callsToAction={[
		{
			href: "/demo",
			label: "Get a demo"
		},
		{
			href: "/learn-more",
			label: "Learn more"
		}
	]}
/>

<!-- Value Statement Section -->
<ValueStatement
	title="Stop losing decades of experience every time someone retires"
	description="Your most experienced workers carry invaluable knowledge that's never been written down. When they leave, that expertise walks out the door. Squint captures their know-how in the moment—turning years of experience into permanent, searchable assets your entire team can access."
	imageSrc="/static/generated/image-a-factory-team-collaborating-around-a-wo.webp"
	imageAlt="Factory team sharing knowledge"
/>

<!-- Social Proof Section -->
<section class="section-px section-py container mx-auto bg-muted/10">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="text-title2 mb-4">Why Squint stands out</h2>
		<p class="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
			Most tools—like Notion, Confluence, and Guru—were built for desk workers with time to write things down. 
			Squint was built for the floor. Instead of typing or documenting, you just hit record.
		</p>
		<LogoScroller
			label="Better than traditional knowledge tools"
			logoUrls={competitorLogos}
			mode="light"
		/>
	</div>
</section>

<!-- Features Section -->
<Features
	title="Built for how your team actually works"
	subtitle="In seconds, you've captured and shared expertise that usually stays in people's heads."
	features={features}
/>

<!-- Stats Section -->
<Stats {stats} class="bg-muted/20" />

<!-- Testimonials Section -->
<section class="bg-muted/30">
	<div class="section-px section-py container mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-title1 mb-4">What operations managers are saying</h2>
			<p class="text-body text-muted-foreground max-w-2xl mx-auto">
				Real results from manufacturing teams who've transformed their knowledge management
			</p>
		</div>
	</div>
	<Testimonials {testimonials} />
</section>

<!-- Before/After Section -->
<ComparisonSection
	title="Transform your knowledge management"
	beforeTitle="Before Squint"
	afterTitle="After Squint"
	beforeItems={[
		"Scribbled notes that get lost",
		"Verbal tips forgotten by next shift",
		"Unsearchable smartphone videos",
		"Asking the same person the same thing again and again"
	]}
	afterItems={[
		"Clear visual guides for every task",
		"One place for all knowledge",
		"Searchable and fast to access",
		"Nothing gets stuck with one person"
	]}
	imageSrc="/static/generated/image-an-experienced-factory-worker-guiding-a-.webp"
/>

<!-- Call to Action -->
<CallToAction
	title="Capture once."
	subtitle="Share forever."
	description="Don't let hard-earned knowledge disappear. Turn every process into a clip your team can learn from today—and reference tomorrow. Works on desktop and mobile. No installs, no training, no friction. Just record."
	imageSrc="/static/generated/image-an-operations-manager-reviewing-workflow.webp"
	callsToAction={[
		{
			href: "/demo",
			label: "Request a demo",
			variant: "primary"
		},
		{
			href: "/contact",
			label: "Talk to sales",
			variant: "secondary"
		}
	]}
/>
