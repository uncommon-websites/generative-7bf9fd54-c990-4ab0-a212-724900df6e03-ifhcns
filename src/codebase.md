# Codebase Documentation

## Overview

This is a modern SvelteKit website template built with TypeScript, Tailwind CSS, and a comprehensive theming system. The codebase is designed for scalability, maintainability, and easy customization per customer deployment.

## Project Structure

```
src/
├── app.css              # Main CSS entry point with Tailwind imports
├── app.html             # Root HTML template with theme configuration
├── base.css             # Base styles, utilities, and component styles
├── spacing.css          # Responsive spacing utilities
├── theme.css            # Theme variables and color system
├── typography.css       # Typography scale and text utilities
├── lib/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Base UI components (Button, Card)
│   │   ├── layout/      # Layout-specific components
│   │   └── animation/   # Animation components
│   ├── content/         # Content configuration
│   ├── navigation.ts    # Navigation structure
│   └── state/          # Svelte state management
└── routes/             # SvelteKit file-based routing
    ├── +layout.svelte   # Root layout
    ├── +page.svelte     # Homepage
    └── [pages]/         # Individual pages
```

## Theming System

### Core Concept

The theming system uses CSS custom properties (variables) for consistent color management across light and dark modes. All components reference semantic theme variables rather than hardcoded colors.

### Theme Configuration

**File: `src/theme.css`**

```css
@theme inline {
	/* Core theme variables */
	--color-background: var(--color-white);
	--color-foreground: var(--color-gray-950);
	--color-primary: var(--color-primary-600);
	--color-primary-foreground: var(--color-primary-50);
	--color-secondary: var(--color-secondary-100);
	--color-muted: var(--color-gray-100);
	--color-muted-foreground: var(--color-gray-500);
	/* ... more variables */
}
```

### Dark Mode Activation

Dark mode is configured per customer deployment and requires two steps:

1. **Uncomment dark mode CSS** in `src/theme.css` (lines 59-94):

   ```css
   /* Remove the comment markers around this block */
   html[data-theme="dark"] {
   	@theme {
   		--color-background: var(--color-gray-950);
   		--color-foreground: var(--color-gray-50);
   		/* ... rest of dark mode variables */
   	}
   }
   ```

2. **Change HTML attribute** in `src/app.html`:

   ```html
   <!-- Light mode -->
   <html data-theme="light">
   	<!-- Dark mode -->
   	<html data-theme="dark"></html>
   </html>
   ```

**Important:** Both steps are required. The dark mode CSS must be uncommented to define the dark theme variables, and the HTML attribute must be changed to activate them.

### Available Theme Variables

| Variable                   | Purpose            | Light Mode  | Dark Mode                 |
| -------------------------- | ------------------ | ----------- | ------------------------- |
| `--color-background`       | Page background    | White       | Gray-950                  |
| `--color-foreground`       | Primary text       | Gray-950    | Gray-50                   |
| `--color-primary`          | Brand color        | Primary-600 | Primary-600               |
| `--color-muted`            | Subtle backgrounds | Gray-100    | Gray-900                  |
| `--color-muted-foreground` | Secondary text     | Gray-500    | Gray-400                  |
| `--color-border`           | Borders/dividers   | Gray-50     | Gray-50 (90% transparent) |
| `--color-card`             | Card backgrounds   | Gray-50     | Gray-900                  |

## Component System

### Icons

This project uses **Lucide icons** with a specific import pattern:

```svelte
<script>
	// Import icons using the ~icons/ prefix with kebab-case names
	import CheckIcon from "~icons/lucide/check";
	import ArrowRightIcon from "~icons/lucide/arrow-right";
	import UserCircleIcon from "~icons/lucide/user-circle";
	import MenuIcon from "~icons/lucide/menu";
</script>

<!-- Usage -->
<CheckIcon class="size-4" />
<ArrowRightIcon class="text-primary-600 size-5" />
```

**Important:**

- Always use the `~icons/lucide/` prefix
- Icon names must be in **kebab-case** (e.g., `arrow-right`, not `ArrowRight`)
- Icons are imported as Svelte components
- Apply styling with classes or style attributes

### UI Components

#### Button Component

**File: `src/lib/components/ui/Button.svelte`**

**Usage:**

```svelte
<script>
	import Button from "$lib/components/ui/Button.svelte";
</script>

<!-- Basic usage -->
<Button variant="primary">Click me</Button>
<Button variant="secondary">Secondary action</Button>
<Button variant="ghost">Subtle action</Button>

<!-- Different sizes -->
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<!-- With icons -->
<Button variant="primary" prefix={IconPlus}>Add Item</Button>

<!-- Disabled state -->
<Button disabled>Disabled</Button>
```

**Variants:**

- `primary`: Main call-to-action buttons (uses `--color-primary`)
- `secondary`: Secondary actions (uses `--color-muted` background with `--color-foreground` text)
- `ghost`: Subtle actions (transparent background)

**Sizes:**

- `sm`: Small buttons for compact interfaces
- `md`: Default size for most use cases
- `lg`: Large buttons for prominent actions

#### Card Component

**File: `src/lib/components/ui/Card.svelte`**

**Usage:**

```svelte
<script>
	import Card from "$lib/components/ui/Card.svelte";
	import IconZap from "~icons/lucide/zap";
</script>

<!-- Basic card -->
<Card title="Card Title" description="Card content goes here." />

<!-- Card with icon -->
<Card title="Fast Performance" description="Lightning-fast loading times." icon={IconZap} />

<!-- Card with image -->
<Card
	title="Beautiful UI"
	description="Stunning visual design."
	imageSrc="https://www.unc.mn/image-placeholder.svg"
	imageAspect="16/9"
/>

<!-- Card with icon overlay on image -->
<Card
	title="Secure & Fast"
	description="Best of both worlds."
	icon={IconZap}
	imageSrc="https://www.unc.mn/image-placeholder.svg"
	imageAspect="9/16"
	iconClass="size-5 text-blue-500"
/>
```

**Props:**

- `title`: Card heading text
- `description`: Card body text
- `icon`: Lucide icon component (optional)
- `iconClass`: Custom icon styling (default: "size-5 text-primary")
- `imageSrc`: Image URL (optional)
- `imageAspect`: "16/9" or "9/16" aspect ratio (default: "16/9")
- `class`: Additional CSS classes

### Layout Components

#### Navigation

**File: `src/lib/components/layout/Nav.svelte`**

The navigation system is responsive and includes:

- Desktop navigation with dropdowns
- Mobile hamburger menu
- Theme-aware styling

#### Footer

**File: `src/lib/components/layout/Footer.svelte`**

Configurable footer with:

- Company information
- Navigation links
- Social media links
- Theme-consistent styling

### Hero Sections

Multiple hero variants are available:

```svelte
<script>
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
</script>

<!-- Standard hero with image -->
<Hero />

<!-- Text-only centered hero -->
<CenteredTextOnlyHero />
```

## Typography System

### Typography Scale

**File: `src/typography.css`**

```css
.text-display    /* 32px-52px, for major headings */
.text-title1     /* 27px-32px, for section headings */
.text-title2     /* 22px-27px, for subsection headings */
.text-title3     /* 18px-22px, for smaller headings */
.text-headline   /* 16px-18px, for emphasized text */
.text-body       /* 16px, for body text */
.text-callout    /* 16px, for highlighted content */
.text-caption    /* 14px, for captions */
.text-footnote   /* 12px, for small supplementary text */
```

**Usage:**

```svelte
<h1 class="text-display">Main Heading</h1>
<h2 class="text-title1">Section Heading</h2>
<p class="text-body">Regular paragraph text.</p>
<span class="text-caption">Small descriptive text.</span>
```

### Text Colors

Instead of hardcoded colors, use theme variables:

```svelte
<!-- Good: Uses theme variables -->
<p style="color: var(--color-muted-foreground);">Secondary text</p>

<!-- Bad: Hardcoded colors -->
<p class="text-gray-500">Secondary text</p>
```

## Spacing System

### Responsive Spacing

**File: `src/spacing.css`**

```css
.section-px     /* Horizontal page padding */
.section-py     /* Vertical section padding */
.section-py-sm  /* Smaller vertical padding */
```

**Usage:**

```svelte
<section class="section-px section-py">
	<div class="container mx-auto">
		<!-- Section content -->
	</div>
</section>
```

### Container Classes

```css
.container-sm   /* max-width: 1024px */
.container-xs   /* max-width: 768px */
```

## State Management

### Navigation State

**File: `src/lib/state/nav.svelte.ts`**

```typescript
import { writable } from "svelte/store";

export const navOpen = writable(false);
export const activeDropdown = writable<string | null>(null);
```

**Usage:**

```svelte
<script>
	import { navOpen } from "$lib/state/nav.svelte.ts";

	function toggleNav() {
		navOpen.update((open) => !open);
	}
</script>

<button onclick={toggleNav}> Toggle Navigation </button>
```

## Content Management

### Configuration

**File: `src/lib/content/index.ts`**

Central location for site configuration:

```typescript
export const CONFIG = {
	companyName: "Your Company",
	tagline: "Your tagline here"
	// ... other config
};
```

### Navigation Structure

**File: `src/lib/navigation.ts`**

```typescript
export const navigation = [
	{
		name: "About",
		href: "/about",
		children: [
			{ name: "Our Story", href: "/about" },
			{ name: "Careers", href: "/careers" }
		]
	}
	// ... more nav items
];
```

## Best Practices

### Component Development

1. **Use theme variables** for all colors:

   ```svelte
   <!-- Good -->
   <div style="background-color: var(--color-card);">

   <!-- Bad -->
   <div class="bg-gray-100">
   ```

2. **Follow naming conventions**:

   - Components: PascalCase (`Button.svelte`)
   - Props: camelCase (`variant`, `iconOnly`)
   - CSS classes: kebab-case (`section-px`)

3. **Use TypeScript** for better development experience:

   ```svelte
   <script lang="ts">
   	type Variant = "primary" | "secondary" | "ghost";

   	interface Props {
   		variant?: Variant;
   		disabled?: boolean;
   		icon?: Component;
   		iconClass?: string;
   	}

   	const {
   		variant = "primary",
   		disabled = false,
   		icon,
   		iconClass = "size-5 text-primary"
   	}: Props = $props();
   </script>
   ```

4. **Smart border radius** for nested elements:

   ```css
   /* Image inside card with proper inner radius */
   border-radius: max(2px, calc(var(--radius) - 1rem));
   ```

5. **Flexible aspect ratios** for images:
   ```svelte
   <img class="w-full object-cover {imageAspect === '9/16' ? 'aspect-[9/16]' : 'aspect-[16/9]'}" />
   ```

### Styling Guidelines

1. **Prefer theme variables** over Tailwind color classes
2. **Use semantic spacing** classes (`section-py`, `section-px`)
3. **Maintain responsive design** with mobile-first approach
4. **Test in both light and dark modes** when applicable

### Performance Considerations

1. **Code splitting**: Pages are automatically split by SvelteKit
2. **Image optimization**: Use appropriate formats and sizes
3. **CSS optimization**: Tailwind purges unused styles in production
4. **Component efficiency**: Use `$derived` for computed values

## Development Workflow

### Adding New Components

1. Create component in appropriate directory (`src/lib/components/`)
2. Use TypeScript for type safety
3. Follow theme variable patterns
4. Add to kitchen sink page for testing (`/kitchen-sink`)
5. Document component usage

### Customizing for Customers

1. **Colors**: Modify color variables in `src/theme.css`
2. **Typography**: Adjust scale in `src/typography.css`
3. **Spacing**: Modify responsive spacing in `src/spacing.css`
4. **Content**: Update configuration in `src/lib/content/`
5. **Dark mode**: Uncomment dark theme CSS and change HTML attribute

### Testing Components

Visit `/kitchen-sink` to see all component variants and states in one place. This page showcases:

**Component Examples:**

- All button variants and sizes (primary, secondary, ghost)
- Card variations (basic, icon, image, icon+image combos)
- Features layouts (1-6 feature bento grids)
- Typography scale and hierarchy
- Color system visualization
- Border radius examples

**Live Theme Controls:**

- **Settings panel** (top-right corner) for real-time theme customization
- **Border radius slider** (0-24px) affects all rounded elements
- **Primary hue wheel** (0-360°) changes brand color across components
- **Background selector** for different gray shades
- **Instant preview** of all components as you make changes
- **Reset button** to return to default values

**Advanced Features Demonstrated:**

- Icon and image aspect ratios (16:9 vs 9:16)
- Custom icon colors and styling
- Smart border radius calculations with 2px minimum
- Responsive layouts and component scaling
- Theme variable inheritance and consistency

## Deployment Notes

### Customer-Specific Theming

Each customer deployment can have:

- Custom color schemes (modify `--color-primary`, etc.)
- Light or dark mode preference (uncomment dark CSS + change HTML attribute)
- Custom typography (font families, sizes)
- Branded content and messaging

**For Dark Mode:**

1. Uncomment dark mode styles in `src/theme.css` (lines 59-94)
2. Change `data-theme="light"` to `data-theme="dark"` in `src/app.html`

**Live Theme Testing:**
Visit `/kitchen-sink` and use the theme controls (settings icon, top-right) to test:

- Border radius adjustments (0-24px)
- Primary color hue changes (0-360°)
- Background shade variations
- Real-time component updates

### Build Configuration

The project uses:

- **SvelteKit** for SSR/SSG capabilities
- **Tailwind CSS** for utility-first styling
- **TypeScript** for type safety
- **PostCSS** for CSS processing

### Browser Support

The theming system uses modern CSS features:

- CSS Custom Properties (IE11+)
- CSS Grid and Flexbox (modern browsers)
- CSS `color-mix()` function (newer browsers, with fallbacks)

## Troubleshooting

### Common Issues

1. **Colors not updating**: Ensure you're using theme variables, not hardcoded classes
2. **Dark mode not working**: Check that dark CSS is uncommented and HTML attribute is set
3. **Spacing inconsistencies**: Use semantic spacing classes instead of arbitrary Tailwind classes
4. **Type errors**: Ensure component props match TypeScript interfaces

### Debug Tools

- Use browser dev tools to inspect CSS custom properties
- Check `/kitchen-sink` page for component testing
- Verify theme variables in computed styles panel
