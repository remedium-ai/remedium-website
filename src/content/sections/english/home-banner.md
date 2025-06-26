---
enable: true # Control the visibility of this section across all pages where it is used
title: "Welcome to ReMediumAI"
description: "Innovative solutions for clinical care and healthcare education"

info_block:
  enable: true
  content: |
    ReMediumAI transforms clinical care and healthcare education through innovative digital solutions. Our platform streamlines perioperative processes and enhances medical training.

  video:
    src: "YOUR_VIDEO_ID" # Replace with your video ID
    type: "" # If video is stored locally in `public/videos`, set to video file type (e.g., "video/mp4")
    provider: "youtube" # Options: "youtube", "vimeo", or "html5"
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
        url: "/services/pc2"
        rel: ""
        target: ""
    - title: "Solutions for the Safe-Brain-Initiative"
      description: "Empowering your clinic with innovative, patient-focused digital solutions for sustainable integration of the safe-brain, perioperative care bundesl and enhance patient-centered precision care."
      background_image: "/images/banner/2.jpg"
      button:
        enable: true
        label: "Book a meeting!"
        url: "/services/sbi"
        rel: ""
        target: ""
    - title: "Advanced AI-Driven Solutions"
      description: "Our AI-powered technologies enhance perioperative care with smart tools and intelligent systems for better outcomes."
      background_image: "/images/banner/3.jpg"
      button:
        enable: true
        label: "Meet our NeuroPilot."
        url: "/services/ai"
        rel: ""
        target: ""
---
