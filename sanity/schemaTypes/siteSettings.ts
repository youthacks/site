import { defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "siteSettings",
	fields: [
		defineField({
			type: "string",
			name: "siteName",
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "reference",
			name: "indexPage",
			to: { type: "page" },
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "navbar",
			name: "navbar",
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "footer",
			name: "footer",
			validation: (rule) => rule.required(),
		}),

		defineField({
			type: "object",
			name: "globalSeo",
			title: "Global SEO",
			fields: [
				defineField({
					type: "text",
					name: "description",
					rows: 3,
					validation: (rule) => [
						rule
							.max(160)
							.warning("Description should be less than 160 characters"),
					],
				}),
				defineField({
					type: "image",
					name: "image",
					description: "1200x630, appears in social media previews.",
				}),
			],
		}),
	],
});
