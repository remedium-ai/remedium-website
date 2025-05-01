---
enable: true # Control the visibility of this section across all pages where it is used
title: "Choose the Pricing Plan That Fuels Your Business Goals"
subtitle: "Pricing"

plans:
  # List of available plans. Ensure that these names are used consistently in other places where applicable.
  - "Monthly" # Use this value exactly in all corresponding places below.
  - "Yearly" # Use this value exactly in all corresponding places below.

list:
  # Basic Plan
  - enable: true
    name: "Essentials" # Name of the pricing tier.
    description: "Businesses with a basic understanding of their target audience and market."

    price:
      # Pricing details for each plan type.
      - type: "Monthly" # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: "200"
        append_value: ""
      - type: "Yearly" # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: "3000"
        append_value: ""

    features:
      - Brand Positioning Workshop
      - Competitive Analysis **Top 3 Competitors**
      - Basic Market Analysis
      - Customer Insights & Segmentation

    cta_btn:
      enable: true
      label: "Order Now"
      url: "/contact"
      rel: ""
      target: ""

  # Medium Plan
  - enable: true
    name: "Growth" # Name of the pricing tier.
    description: "Refine brand and gain a deeper understanding of the market and customer base."

    price:
      # Pricing details for each plan type.
      - type: "Monthly" # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: "500"
        append_value: ""
      - type: "Yearly" # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: "4000"
        append_value: ""

    features:
      - In-Depth Brand Positioning Workshop
      - Competitive Analysis **Top 5 Competitors**
      - Comprehensive Market Analysis
      - Customer Insights & Segmentation

    cta_btn:
      enable: true
      label: "Order Now"
      url: "/contact"
      rel: ""
      target: ""

  # Pro Plan
  - enable: true
    name: "Enterprise" # Name of the pricing tier.
    description: "Get a comprehensive market research, and in-depth customer insights."

    price:
      # Pricing details for each plan type.
      - type: "Monthly" # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: "600"
        append_value: ""
      - type: "Yearly" # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: "6000"
        append_value: ""

    features:
      - Comprehensive Brand Positioning Strategy
      - Full Competitive Analysis
      - Advanced Market Analysis
      - In-Depth Customer Insights

    cta_btn:
      enable: true
      label: "Order Now"
      url: "/contact"
      rel: ""
      target: ""
---
