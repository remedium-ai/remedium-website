---
enable: true # Control the visibility of this section across all pages where it is used
title: "Welcome to ReMediumAI"
description: "Innovative solutions for clinical care and healthcare education"

info_block:
  enable: true
  content: |
    ReMediumAI transforms clinical care and healthcare education through innovative digital solutions. Our platform streamlines perioperative processes and enhances medical training.

  video:
    src: "/videos/your-video-file.mp4" # Replace "your-video-file.mp4" with your actual video filename
    type: "video/mp4" # Set to the video file type
    provider: "html5" # Changed from "youtube" to "html5" for local videos
    poster: "/images/video-thumbnail.jpg" # Path to thumbnail image for the video
    autoplay: true # Set to true to autoplay; false for manual start (default: false)
    id: "banner-video"

main_block:
  disable_slider: false # if this is true then slider will be disabled and only first slide from below will be shown
  slides:
    - title: "Revolutionizing Perioperative Care"
      description: "Streamline your perioperative processes with our advanced digital platform. <br/> Enhance data collection, improve compliance, and accelerate clinical care outcomes."
      background_image: "/images/banner/1.jpg"
      button:
        enable: true
        label: "More on Perioperative Solutions."
        url: "/services/services"
        rel: ""
        target: ""
    - title: "Solutions for the Safe-Brain-Initiative"
      description: "Empowering your clinic with innovative, patient-focused digital solutions for sustainable integration of the safe-brain, perioperative care bundesl and enhance patient-centered precision care."
      background_image: "/images/banner/2.jpg"
      button:
        enable: true
        label: "Book a meeting!"
        url: "/services/packages"
        rel: ""
        target: ""
    - title: "Advanced AI-Driven Solutions"
      description: "Our AI-powered technologies enhance perioperative care with smart tools and intelligent systems for better outcomes."
      background_image: "/images/banner/3.jpg"
      button:
        enable: true
        label: "Experience our Perioperative AI Assistant"
        url: "/services/products"
        rel: ""
        target: ""
---
