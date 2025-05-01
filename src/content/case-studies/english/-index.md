---
title: "Client Success Stories"
meta_description: "This is a example description"

# Override "Portfolio Section" data located in Portfolio list page
index_portfolio_section:
  enable: true # Control the visibility of this section across all pages where it is used
  head_type: "filter"
  # unique_id: "section-1" # If head_type is "filter", this will be used as the unique id for the filtering.
  filter:
    layout: "classic" # "classic" | "boxed" | "modern"

  head:
    title: "Success Stories: How We Helped Businesses Thrive"
    subtitle: "Case Studies"

    cta_btn:
      enable: true
      label: "See All Case Studies"
      url: "/case-studies"
      rel: ""
      target: ""

  # Check src/types/index.d.ts `ContentList` type
  body:
    content: "portfolio"
    layout: "masonry"
    # columns: 3
    # limit: false
    # gap: "gap-6"
    card:
      layout: "overlay" # "classic" | "overlay"
---
