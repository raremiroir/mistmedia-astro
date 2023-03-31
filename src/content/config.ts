// Import utilities from astro:content	
import { defineCollection, z } from 'astro:content';

// define schema for each collection
const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		isDraft: z.boolean().optional(),
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		language: z.enum(['nl', 'en']).optional(),
		tags: z.array(z.string()).optional(),
		author: z.string().default(`${import.meta.env.AUTHOR_NAME}`),
		authorImage: z.string().default('/public/' + `${import.meta.env.AUTHOR_IMAGE}`),
		authorTwitter: z.string().default(`${import.meta.env.AUTHOR_TWITTER}`),
		authorGithub: z.string().default(`${import.meta.env.AUTHOR_GITHUB}`),
		authorLinkedIn: z.string().default(`${import.meta.env.AUTHOR_LINKEDIN}`),
		authorWebsite: z.string().default(`${import.meta.env.AUTHOR_URL}`),
		authorEmail: z.string().default(`${import.meta.env.AUTHOR_EMAIL}`),
	}),
});

// Export collections object to register in collection(s)
export const collections = { 
	blog
};
