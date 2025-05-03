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
      value: "+49-177-331-2169"
    - icon: "/images/icons/svg/email.svg"
      label: "Email us"
      value: "info@remedium.ai"

social:
  enable: true
  title: "Follow us on social media"
  list:
    - enable: true
      label: "linkedin"
      icon: "/images/icons/svg/linkedin.svg"
      url: "https://www.linkedin.com/company/remediumai/"

# Check config.toml file for form action related settings
form:
  email_subject: "New form submission from remedium.ai website"
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
      type: "text"
      half_width: true
      default_value: ""
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
