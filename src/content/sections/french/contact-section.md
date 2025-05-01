---
enable: true # Control the visibility of this section across all pages where it is used
title: "Contactez-nous pour en savoir plus"
description: "Que vous cherchiez une aide d'experts, notre équipe dédiée est prête à vous soutenir à chaque étape du chemin."
subtitle: "Contact"

contact_list:
  enable: true
  list:
    - icon: "/images/icons/svg/phone.svg"
      label: "Appelez-nous maintenant"
      value: "+1-202-555-0190"
    - icon: "/images/icons/svg/email.svg"
      label: "Envoyez-nous un e-mail"
      value: "example@gmail.com"
    - icon: "/images/icons/svg/whatsapp.svg"
      label: "Discutez avec nous"
      value: "@example"

social:
  enable: true
  title: "Suivez-nous sur les réseaux sociaux"
  # # uncomment below list if you want to override `src/config/social.json` data
  # list:
  #   - enable: true
  #     label: "facebook"
  #     icon: "/images/icons/svg/facebook.svg"
  #     url: "/"

# Check config.toml file for form action related settings
form:
  email_subject: "Nouvelle soumission de formulaire du site web Looka" # Customized email subject (applicable when anyone submit form, form submission may receive by email depend on provider)
  submit_button:
    label: "Envoyer votre réponse"
  # This note will show at the end of form
  # note: |
  #   Vos données sont en sécurité avec nous. Nous respectons votre vie privée et ne partageons jamais vos informations. <br /> Lisez notre [Politique de confidentialité](/privacy-policy/).
  inputs:
    - label: ""
      placeholder: "Nom complet"
      name: "Nom complet" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Adresse e-mail"
      name: "Adresse e-mail" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "email"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Numéro de téléphone"
      name: "Numéro de téléphone" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Entreprise"
      name: "Entreprise" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Sujet"
      name: "Sujet" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "" # select | search - default is select
        search: # if type is search then it will work
          placeholder: ""
        items:
          - label: "Exemple 01"
            value: "Exemple 01"
          - label: "Exemple 02"
            value: "Exemple 02"
          - label: "Exemple 03"
            value: "Exemple 03"
    - label: ""
      placeholder: "Sujet avec recherche"
      name: "Sujet avec recherche" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "search" # select | search - default is select
        search: # if type is search then it will work
          placeholder: "Sujet avec recherche"
        items:
          - label: "Lowni Saiki"
            value: "Lowni Saiki"
          - label: "Sikow Pow"
            value: "Sikow Pow"
          - label: "Kenbi Shaktun"
            value: "Kenbi Shaktun"
          - label: "Lorem IH2"
            value: "Lorem IH2"
          - label: "Aruyyo Kawn"
            value: "Aruyyo Kawn"
          - label: "Marong Lowbbi"
            value: "Marong Lowbbi"
    - label: ""
      tag: "textarea"
      default_value: ""
      rows: "4" # Only work if tag is textarea
      placeholder: "Entrez votre message."
      name: "Message" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: false
    - label: "Google Search" # only valid for type="checkbox" & type === "radio"
      checked: false # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "Comment avez-vous entendu parler de nous?" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Médias sociaux" # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Parrainage" # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Autre" # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "J'accepte les termes et conditions et la [politique de confidentialité](/contact/)." # only valid for type="checkbox" & type === "radio"
      name: "Agreed Privacy" # This is crucial. Its indicate under which name you want to receive this field data
      value: "Agreed" # Value that will be submit (applicable for type="checkbox" & type === "radio")
      checked: false # only valid for type="checkbox" & type === "radio"
      required: true
      type: "checkbox"
      half_width: false
      default_value: ""
    - note: success # info | warning | success | deprecated | hint
      parent_class: "hidden text-sm message success"
      content: Nous avons reçu votre message! Nous vous répondrons dès que possible.
    - note: deprecated # info | warning | success | deprecated | hint
      parent_class: "hidden text-sm message error"
      content: Quelque chose a mal tourné! Veuillez utiliser ce courriel - [looka-astro-theme@gmail.com](mailto:looka-astro-theme@gmail.com) pour soumettre un ticket!
---
