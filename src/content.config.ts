import parseTomlToJson from "@/lib/utils/parseTomlToJson";
import { defineCollection, z } from "astro:content";

const config = parseTomlToJson("./src/config/config.toml");
const portfolio_folder = config.settings.portfolio_folder || "case-studies";
const blog_folder = config.settings.blog_folder || "blog";
const services_folder = config.settings.services_folder || "services";

// Universal Page Schema
const page = z.object({
  title: z.string(),
  date: z.date().optional(), // example date format 2022-01-01 or 2022-01-01T00:00:00+00:00 (Year-Month-Day Hour:Minute:Second+Timezone)
  description: z.string().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  robots: z.string().optional(),
  exclude_from_sitemap: z.boolean().optional(),
  custom_slug: z.string().optional(),
  canonical: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  disable_tagline: z.boolean().optional(),
});

// Marquee Schema
const marquee_config = z.object({
  element_width: z.string(),
  element_width_in_small_devices: z.string(),
  pause_on_hover: z.boolean(),
  reverse: z.enum(["reverse", ""]).optional(), // Optional: "reverse" or an empty string
  duration: z.string(),
});

// Call to Action Button
const cta_btn = z.object({
  enable: z.boolean(),
  label: z.string(),
  url: z.string(),
  rel: z.string().optional(),
  target: z.string().optional(),
});

// Animated Number
const animated_number = z.object({
  value: z.string(),
  prepend_value: z.string(),
  append_value: z.string(),
});

// Pages collection schema
const pages_collection = defineCollection({
  schema: page,
});

const services_section = z.object({
  enable: z.boolean().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  creative_shape: z
    .object({
      enable: z.boolean(),
      position: z.enum(["top", "bottom"]),
    })
    .optional(),
  cta: z.enum(["link", "slider-nav"]).optional(),
  color_scheme: z.enum(["dark", "light"]).optional(),
  show_services_as: z.enum(["slider", "static"]).optional(),
  limit: z.union([z.number(), z.literal(false)]).optional(),
  cta_btn: cta_btn.optional(),
});

// Service collection schema
const service_collection = defineCollection({
  schema: page.merge(
    z.object({
      icon: z.string().optional(),
      has_custom_line_animation_bg: z.boolean().optional(),
      service_details_marquee: marquee_config.optional(),
      intro: z
        .object({
          // Call to Action Button
          enable: z.boolean(),
          image: z.string().optional(),
          title: z.string(),
          description: z.string(),
          cta_btn: z
            .object({
              enable: z.boolean(),
              label: z.string(),
              url: z.string(),
              rel: z.string().optional(),
              target: z.string().optional(),
            })
            .optional(),
        })
        .optional(),
      details: z
        .object({
          enable: z.boolean(),
          title: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              enable: z.boolean(),
              image: z.string(),
              title: z.string(),
              description: z.string(),
              cta_btn: cta_btn,
            }),
          ),
        })
        .optional(),
      impact: z
        .object({
          enable: z.boolean(),
          title: z.string(),
          description: z.string(),
          list: z.array(z.string()),
          stats_block: z.object({
            enable: z.boolean(),
            lg: z
              .array(
                z.object({
                  background: z
                    .object({
                      type: z.enum(["image-overlay", "light-color"]),
                      image: z.string(),
                    })
                    .optional(),
                  title: animated_number,
                  description: z.string(),
                }),
              )
              .optional(),
            md: z
              .array(
                z.object({
                  background: z
                    .object({
                      type: z.enum(["image-overlay", "light-color"]),
                      image: z.string(),
                    })
                    .optional(),
                  title: animated_number,
                  description: z.string(),
                }),
              )
              .optional(),
            sm: z
              .array(
                z.object({
                  background: z
                    .object({
                      type: z.enum(["image-overlay", "light-color"]),
                      image: z.string(),
                    })
                    .optional(),
                  title: animated_number,
                  description: z.string(),
                }),
              )
              .optional(),
          }),
          cta_btn: cta_btn.optional(),
        })
        .optional(),
      services_section: services_section.optional(),
      index_services_section: services_section.optional(),
      faq_section: z
        .object({
          enable: z.boolean().optional(),
          title: z.string().optional(),
          section_layout: z.enum(["horizontal", "vertical"]).optional(),
          minimal_faq_layout: z.boolean().optional(),
          faq_layout_only: z.boolean().optional(),
          show_categories: z.boolean().optional(),
          subtitle: z.string().optional(),
          cta_btn: cta_btn.optional(),
        })
        .optional(),
    }),
  ),
});

// Post collection schema
const blog_collection = defineCollection({
  schema: page.merge(
    z.object({
      categories: z.array(z.string()).default(["others"]),
      author: z.string().optional(),
      excerpt: z.string().optional(),
      settings: z
        .object({
          content: z.enum(["blog"]).optional(),
          layout: z.enum(["grid"]).optional(),
          columns: z
            .union([z.literal(1), z.literal(2), z.literal(3)])
            .optional(),
          limit: z.union([z.number().int(), z.literal(false)]).optional(),
          gap: z.enum(["gap-6", "gap-8"]).optional(),
          card: z.object({
            layout: z
              .enum(["classic", "overlay", "modern", "horizontal"])
              .optional(),
          }),
        })
        .optional(),
      single: z
        .object({
          layout: z.enum(["minimal", "modern"]),
        })
        .optional(),
    }),
  ),
});

// Portfolio Collection
const portfolio_collection = defineCollection({
  schema: page.merge(
    z.object({
      categories: z.array(z.string()).optional(),
      masonry_image: z.string().optional(),
      information: z
        .array(
          z.object({
            icon: z.string(),
            label: z.string(),
            value: z.string(),
          }),
        )
        .optional(),
      index_portfolio_section: z
        .object({
          enable: z.boolean(),
          head_type: z.enum(["filter", "heading"]),
          filter: z.object({
            layout: z.enum(["classic", "boxed", "modern"]),
          }),
          head: z.object({
            title: z.string(),
            subtitle: z.string(),
            cta_btn: z.object({
              enable: z.boolean(),
              label: z.string(),
              url: z.string(),
              rel: z.string().optional(),
              target: z.string().optional(),
            }),
          }),
          body: z.object({
            content: z.enum(["portfolio", "blog"]),
            layout: z.enum(["masonry", "grid"]),
            card: z.object({
              layout: z.enum(["classic", "overlay"]),
            }),
          }),
        })
        .optional(),
    }),
  ),
});

// Export collections
export const collections = {
  // To prevent, getEntry (Content fetching API) throws error when collection does not exist, we specify a default collection along with the schema of each required collection
  [blog_folder]: blog_collection,
  blog: blog_collection,
  [services_folder]: service_collection,
  services: service_collection,
  [portfolio_folder]: portfolio_collection,
  "case-studies": portfolio_collection,

  pages: pages_collection,
  sections: defineCollection({}),
  about: defineCollection({}),
  contact: defineCollection({}),
  faq: defineCollection({}),
  team: defineCollection({}),
  pricing: defineCollection({}),
  homepage: defineCollection({}),
  author: defineCollection({}),
  career: defineCollection({}),
  widgets: defineCollection({}),
  "layouts-example": defineCollection({}),
};
