---
title: "Classique & Ma on"
sections:
  - enable: true # Control the visibility of this section across all pages where it is used
    head_type: "filter"
    unique_id: "section-1" # If head_type is "filter", this will be used as the unique id for the filtering.
    filter:
      layout: "classic" # "classic" | "boxed" | "modern"
    # head:
    #   title: "Success Stories: How We Helped Businesses Thrive"
    #   subtitle: "Case Studies"

    #   cta_btn:
    #     enable: true
    #     label: "See All Case Studies"
    #     url: "/case-studies"
    #     rel: ""
    #     target: ""

    # Check src/types/index.d.ts `ContentList` type
    body:
      content: "portfolio"
      layout: "grid"
      # columns: 3
      # limit: false
      # gap: "gap-6"
      card:
        layout: "classic" # "classic" | "overlay"

  - enable: true # Control the visibility of this section across all pages where it is used
    head_type: "filter"
    filter:
      layout: "boxed" # "classic" | "boxed" | "modern"
    unique_id: "section-2" # If head_type is "filter", this will be used as the unique id for the filtering.
    # head:
    #   title: "Success Stories: How We Helped Businesses Thrive"
    #   subtitle: "Case Studies"

    #   cta_btn:
    #     enable: true
    #     label: "See All Case Studies"
    #     url: "/case-studies"
    #     rel: ""
    #     target: ""

    # Check src/types/index.d.ts `ContentList` type
    body:
      content: "portfolio"
      layout: "masonry"
      # columns: 3
      # limit: false
      # gap: "gap-6"
      card:
        layout: "classic" # "classic" | "overlay"
---
