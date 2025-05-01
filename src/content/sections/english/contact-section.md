---
enable: true # Control the visibility of this section across all pages where it is used
title: "Contact Us for More Information"
description: "Whether you're seeking expert assistance, our dedicated team is prepared to support you every step of the way."
subtitle: "Contact"

contact_list:
  enable: true
  list:
    - icon: "/images/icons/svg/phone.svg"
      label: "Call us now"
      value: "+1-202-555-0190"
    - icon: "/images/icons/svg/email.svg"
      label: "Email us"
      value: "example@gmail.com"
    - icon: "/images/icons/svg/whatsapp.svg"
      label: "Chat with us"
      value: "@example"

social:
  enable: true
  title: "Follow us on social media"
  # # uncomment below list if you want to override `src/config/social.json` data
  # list:
  #   - enable: true
  #     label: "facebook"
  #     icon: "/images/icons/svg/facebook.svg"
  #     url: "/"

# Check config.toml file for form action related settings
form:
  email_subject: "New form submission from looka website" # Customized email subject (applicable when anyone submit form, form submission may receive by email depend on provider)
  submit_button:
    label: "Submit Your Response"
  # This note will show at the end of form
  # note: |
  #   Your data is safe with us. We respect your privacy and never share your information. <br /> Read our [Privacy Policy](/privacy-policy/).
  inputs:
    - label: ""
      placeholder: "Full Name"
      name: "Full Name" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Email Address"
      name: "Email Address" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "email"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Phone Number"
      name: "Phone Number" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Company"
      name: "Company" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Subject"
      name: "Subject" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "" # select | search - default is select
        search: # if type is search then it will work
          placeholder: ""
        items:
          - label: "Example 01"
            value: "Example 01"
          - label: "Example 02"
            value: "Example 02"
          - label: "Example 03"
            value: "Example 03"
    - label: ""
      placeholder: "Subject With Search"
      name: "Subject With Search" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "search" # select | search - default is select
        search: # if type is search then it will work
          placeholder: "Subject With Search"
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
      placeholder: "Enter your message."
      name: "Message" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: false
    - label: "Google Search" # only valid for type="checkbox" & type === "radio"
      checked: false # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "How did you hear about us?" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Social Media" # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Referral" # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Other" # only valid for type="checkbox" & type === "radio"
      name: "User Source" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "I agree to the terms and conditions and [privacy policy](/contact/)." # only valid for type="checkbox" & type === "radio"
      name: "Agreed Privacy" # This is crucial. Its indicate under which name you want to receive this field data
      value: "Agreed" # Value that will be submit (applicable for type="checkbox" & type === "radio")
      checked: false # only valid for type="checkbox" & type === "radio"
      required: true
      type: "checkbox"
      half_width: false
      default_value: ""
    - note: success # info | warning | success | deprecated | hint
      parent_class: "hidden text-sm message success"
      content: We have received your message! We'll get back to you as soon as possible.
    - note: deprecated # info | warning | success | deprecated | hint
      parent_class: "hidden text-sm message error"
      content: Something went wrong! please use this mail - [looka-astro-theme@gmail.com](mailto:looka-astro-theme@gmail.com) to submit a ticket!
---
