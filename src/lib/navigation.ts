/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	/** Optional link target, e.g., '_blank' */
	target?: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Get a demo",
	href: "/demo"
};

export const navigation: NavItem[] = [
	{
		label: "Product",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "How it works",
				href: "/how-it-works",
				description: "See Squint in action",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Features",
				href: "/features",
				description: "Everything you need to capture knowledge",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Use cases",
				href: "/use-cases",
				description: "How teams use Squint",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Solutions",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Manufacturing",
				href: "/solutions/manufacturing",
				description: "For production floors",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Training & Onboarding",
				href: "/solutions/training",
				description: "Reduce time to productivity",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Process Documentation",
				href: "/solutions/documentation",
				description: "Visual SOPs that work",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Resources",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Blog",
				href: "/blog",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Customer stories",
				href: "/customers",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Help center",
				href: "/help",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: true
	},
	{
		label: "Company",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Contact",
				href: "/contact",
				showInNav: false,
				showInFooter: true
			}
		]
	},
	{
		label: "Legal",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Security",
				href: "/security",
				showInNav: false,
				showInFooter: true
			}
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
