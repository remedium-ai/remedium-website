---
enable: true # Control the visibility of this section across all pages where it is used

info_block:
  enable: true
  content: |
    ReMedium AI transforms clinical research and healthcare education through innovative digital solutions. Our platform streamlines clinical trials and enhances medical training.

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
    - title: "Revolutionizing Clinical Research"
      description: "Streamline your clinical trials with our advanced eCRF platform. <br/> Enhance data collection, improve compliance, and accelerate research timelines."
      background_image: "/images/banner/1.jpg"
      button:
        enable: true
        label: "Learn More"
        url: "/products/ecrf"
        rel: ""
        target: ""
    - title: "Intelligent Clinical Dashboards"
      description: "Gain real-time insights into your clinical trials. <br/> Make data-driven decisions with our comprehensive analytics platform."
      background_image: "/images/banner/2.jpg"
      button:
        enable: true
        label: "Explore Dashboard"
        url: "/products/dashboard"
        rel: ""
        target: ""
    - title: "Advanced eLearning Solutions"
      description: "Transform healthcare education with our interactive eLearning platform. <br/> Deliver engaging, effective training for medical professionals."
      background_image: "/images/banner/3.jpg"
      button:
        enable: true
        label: "Discover eLearning"
        url: "/products/elearning"
        rel: ""
        target: ""
---
