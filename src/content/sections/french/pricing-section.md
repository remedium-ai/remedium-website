---
enable: true # Contrôle de la visibilité de cette section sur toutes les pages où elle est utilisée
title: "Choisissez le plan tarifaire qui alimente vos objectifs commerciaux"
subtitle: "Tarifs"

plans:
  # Liste des plans disponibles. Assurez-vous d'utiliser ces noms de manière cohérente dans d'autres endroits où cela est applicable.
  - "Mensuel" # Utilisez cette valeur exactement dans tous les endroits correspondants ci-dessous.
  - "Annuel" # Utilisez cette valeur exactement dans tous les endroits correspondants ci-dessous.

list:
  # Plan de base
  - enable: true
    name: "Essentiel" # Nom du plan de tarification.
    description: "Entreprises avec une compréhension de base de leur public cible et de leur marché."

    price:
      # Détails des prix pour chaque type de plan.
      - type: "Mensuel" # Type de plan (doit correspondre aux valeurs de la section 'plans' ci-dessus).
        prepend_value: "€"
        value: "200"
        append_value: ""
      - type: "Annuel" # Type de plan (doit correspondre aux valeurs de la section 'plans' ci-dessus).
        prepend_value: "€"
        value: "3000"
        append_value: ""

    features:
      - Atelier de positionnement de marque
      - Analyse de la concurrence **Top 3 concurrents**
      - Analyse de marché de base
      - Insights clients et segmentation

    cta_btn:
      enable: true
      label: "Commander maintenant"
      url: "/contact"
      rel: ""
      target: ""

  # Plan de milieu de gamme
  - enable: true
    name: "Croissance" # Nom du plan de tarification.
    description: "Raffinez votre marque et obtenez une compréhension approfondie de votre marché et de vos clients."

    price:
      # Détails des prix pour chaque type de plan.
      - type: "Mensuel" # Type de plan (doit correspondre aux valeurs de la section 'plans' ci-dessus).
        prepend_value: "€"
        value: "500"
        append_value: ""
      - type: "Annuel" # Type de plan (doit correspondre aux valeurs de la section 'plans' ci-dessus).
        prepend_value: "€"
        value: "4000"
        append_value: ""

    features:
      - Atelier de positionnement de marque approfondi
      - Analyse de la concurrence **Top 5 concurrents**
      - Analyse de marché approfondie
      - Insights clients et segmentation

    cta_btn:
      enable: true
      label: "Commander maintenant"
      url: "/contact"
      rel: ""
      target: ""

  # Plan Pro
  - enable: true
    name: "Entreprise" # Nom du plan de tarification.
    description: "Obtenez une analyse de marché approfondie et des insights clients détaillés."

    price:
      # Détails des prix pour chaque type de plan.
      - type: "Mensuel" # Type de plan (doit correspondre aux valeurs de la section 'plans' ci-dessus).
        prepend_value: "€"
        value: "600"
        append_value: ""
      - type: "Annuel" # Type de plan (doit correspondre aux valeurs de la section 'plans' ci-dessus).
        prepend_value: "€"
        value: "6000"
        append_value: ""

    features:
      - Stratégie de positionnement de marque approfondie
      - Analyse de la concurrence complète
      - Analyse de marché avancée
      - Insights clients détaillés

    cta_btn:
      enable: true
      label: "Commander maintenant"
      url: "/contact"
      rel: ""
      target: ""
---
