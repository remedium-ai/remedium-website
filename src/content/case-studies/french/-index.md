---
title: "Histoires de Succès des Clients"
description: "Ceci est un exemple de description m ta"

# Override "Portfolio Section" data located in Portfolio list page
index_portfolio_section:
  enable: true # Control the visibility of this section across all pages where it is used
  head_type: "filter"
  # unique_id: "section-1" # If head_type is "filter", this will be used as the unique id for the filtering.
  filter:
    layout: "classic" # "classic" | "boxed" | "modern"

  head:
    title: "Histoires de Succès : Comment nous avons aid les Entreprises   R  ussir"
    subtitle: " tudes de Cas"

    cta_btn:
      enable: true
      label: "Voir Toutes les  tudes de Cas"
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
