---
title: "Services"
description: "Ceci est un exemple de description m ta"
draft: false
has_custom_line_animation_bg: true

# Override "Services Section" data located in services list page
index_services_section:
  enable: true # Control the visibility of this section across all services single
  # title: "Services Complémentaires pour Maximiser le Potentiel de Votre Entreprise"
  # subtitle: "Nos Services"

  creative_shape: # Background shape
    enable: true
    position: "top"

  # cta: "slider-nav" # "link" | "slider-nav" ( Define weather call to action button should be slider control or a link )
  # color_scheme: "light" # "dark" | "light"; (default "dark"); weather to show services in light or dark color scheme
  # show_services_as: "static" # "slider" | "static"; (default "slider"); weather to show services as slider or static list
  limit: false # number / false (default "3"); Limit the number of services to be displayed (Only work if show_services_as is static)

  cta_btn:
    enable: false
    label: "Voir Tous les Services"
    url: "/services"
    rel: ""
    target: ""

# ----------------------------------------------------------------------------------------------------------------
# DATA FOR SERVICE SINGLE PAGES
# ----------------------------------------------------------------------------------------------------------------

# "Service Details" Section located in Services Single Page (Image Moving Animation Settings)
service_details_marquee:
  element_width: "26.5rem"
  element_width_in_small_devices: "18.75rem"
  pause_on_hover: true
  reverse: "" # reverse / ""
  duration: "30s"

# "Services" Section located in Services Single Page (Override Default Content of `/sections/services-section.md`)
# Uncomment key values that you wan to override ()
services_section:
  enable: true # Control the visibility of this section across all services single
  title: "Services Complémentaires pour Maximiser le Potentiel de Votre Entreprise"
  # subtitle: "Nos Services"

  creative_shape: # Background shape
    enable: false
    position: "bottom"

  # cta: "link" # "link" | "slider-nav" ( Define weather call to action button should be slider control or a link )
  # color_scheme: "light" # "dark" | "light"; (default "dark"); weather to show services in light or dark color scheme
  # show_services_as: "static" # "slider" | "static"; (default "slider"); weather to show services as slider or static list
  # limit: 3 # number / false (default "3"); Limit the number of services to be displayed (Only work if show_services_as is static)

  # cta_btn:
  #   enable: true
  #   label: "Voir Tous les Services"
  #   url: "/services"
  #   rel: ""
  #   target: ""

# "FAQ" Section located in Services Single Page
faq_section:
  enable: true # Control the visibility of this section across all services single
  title: "Vous Avez des Questions sur l'Identité de Marque ? Nous Sommes Là pour Vous Aider"
  # subtitle: ""
  section_layout: "horizontal"
  minimal_faq_layout: true
  faq_layout_only: false
  show_categories: false

  cta_btn:
    enable: true
    label: "Voir Toutes les FAQ"
    url: "/faq"
    rel: ""
    target: ""
---
