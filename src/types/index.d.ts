export type MarqueeConfig = {
  element_width: string;
  element_width_in_small_devices: string;
  pause_on_hover: boolean;
  reverse?: "reverse" | "" | undefined; // Optional: "reverse" or empty string
  duration: string;
};

export type ContentListType = {
  content?: "portfolio" | "blog"; // Define which content list to show
  layout?: "masonry" | "grid"; // Define the layout of the portfolio list. Default is "grid".
  columns?: 1 | 2 | 3; // Define the number of columns for the grid layout. Default is 3.
  limit?: number | false; // Limit the number of items to be displayed. Default is false.
  gap?: "gap-6" | "gap-8"; // Define the gap between items in the grid layout. Default is "gap-6".
  card: {
    layout?: "classic" | "overlay" | "modern" | "horizontal"; // Define the layout of the card. Default is "classic".
  };
};

export type Portfolio = Section & {
  masonry_image?: string;
};

// Type for the video configuration
export type VideoConfig = {
  src: string; // youtube or vimeo video ID or path to video file
  type?: string; // Optional: only required for local files (e.g., "video/mp4")
  provider?: "youtube" | "vimeo" | "html5"; // Accepted providers (default is "youtube")
  poster?: string; // Optional: URL or image path for video thumbnail
  autoplay?: boolean; // Optional: true to autoplay, false to start manually (default is false)
  id?: string; // required if same video is used on multiple time on same page
};

export type Button = {
  enable: boolean;
  label: string;
  url: string;
  rel?: string;
  target?: string;
};

export type TocHeading = {
  depth: number;
  slug: string;
  text: string;
  subheadings: Heading[];
};

export type PricingTier = {
  enable: boolean; // Whether the pricing tier is enabled
  name: string; // Name of the pricing tier
  description: string; // Description of the pricing tier
  price: Price[]; // Array of prices for the plans
  features: Feature[]; // List of features included in the pricing tier
  cta_btn: Button; // Call-to-action button details
};

export type StatsBlock = {
  enable: boolean;
  default: boolean;
  list: StatItem[];
};

export type StatItem = {
  value: string;
  prepend_value: string;
  append_value: string;
  title: string;
  description: string;
};

// Universal Type For Every Section
export type Section = {
  enable?: boolean;
  title?: string;
  excerpt?: string;
  date?: Date | string;
  author?: string;
  subtitle?: string;
  categories?: string[];
  description?: string;
  cta_btn?: Button;
  image?: string;
  bg_pattern_image?: string;
  limit?: false | number;
};

export type SocialLink = {
  enable: boolean;
  label: string;
  icon: string;
  url: string;
};

export type Social = {
  enable: boolean;
  list: SocialLink[];
};

export type TeamMember = {
  image: string;
  name: string;
  role: string;
  leadership_team?: boolean; // Optional since not all members have it
  social: Social;
};

export type FAQItem = {
  featured: boolean;
  active: boolean;
  title: string;
  content: string;
};

export type FAQCategory = {
  label: string;
  list: FAQItem[];
};

// For Astro Font
type GlobalValues = "inherit" | "initial" | "revert" | "revert-layer" | "unset";
interface Source {
  path?: string;
  preload?: boolean;
  css?: Record<string, string>;
  style:
    | "normal"
    | "italic"
    | "oblique"
    | `oblique ${number}deg`
    | GlobalValues
    | (string & {});
  weight?:
    | "normal"
    | "bold"
    | "lighter"
    | "bolder"
    | GlobalValues
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | (string & {})
    | (number & {});
}
interface FontConfig {
  name: string;
  src: Source[];
  fetch?: boolean;
  verbose?: boolean;
  selector?: string;
  preload?: boolean;
  cacheDir?: string;
  basePath?: string;
  fallbackName?: string;
  googleFontsURL?: string;
  cssVariable?: string | boolean;
  fallback: "serif" | "sans-serif" | "monospace";
  display: "auto" | "block" | "swap" | "fallback" | "optional" | (string & {});
}

// ----------------------------------------------------------------------------------------------------
// START CONTACT FORM TYPE

type NoteType = "info" | "warning" | "success" | "deprecated" | "hint";

type DropdownType = "select" | "search";

interface DropdownSearchConfig {
  placeholder?: string;
}

interface DropdownItem {
  label: string;
  selected: true;
  value: string;
}

interface DropdownConfig {
  type?: DropdownType;
  search?: DropdownSearchConfig;
  items: DropdownItem[];
}

interface InputField {
  label: string;
  placeholder?: string;
  required: boolean;
  half_width: boolean;
  default_value: string;
  name?: string;
  selected?: boolean; // Only applicable if tag is input radio & checkbox
  value?: boolean; // Only applicable if tag is input radio & checkbox
  checked?: boolean; // Only applicable if tag is input radio & checkbox
  type?: "text" | "email" | "radio" | "checkbox";
  id?: string;
  parent_class?: string;
  tag?: "textarea";
  rows?: string; // Only applicable if tag is textarea
  group?: string; // Only applicable if tag is input radio & checkbox
  group_label?: string; // Only applicable if tag is input radio & checkbox
  items?: InputField[]; // Only applicable if tag is input radio & checkbox
  dropdown?: DropdownConfig;
  note?: NoteType;
  content?: string;
}

interface SubmitButtonConfig {
  label: string;
}

export interface ContactFormConfig {
  action: string;
  email_subject: string;
  submit_button: SubmitButtonConfig;
  note: string;
  inputs: InputField[];
}

// End CONTACT FORM TYPE
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------
// START MENU TYPE
export interface Badge {
  enable: boolean;
  label: string;
  color: "primary" | "success" | "danger" | "warning" | string;
  type: "dot" | "text";
}

export interface Testimonial {
  enable: boolean;
  image: string;
  content: string;
}

export interface Service {
  enable: boolean;
  name: string;
}

export interface ChildNavigationLink {
  enable: boolean;
  name: string;
  url?: string;
  rel?: string;
  target?: string;
  hasChildren?: boolean;
  badge?: Badge;
  children?: ChildNavigationLink[];
}

export interface NavigationLink extends ChildNavigationLink {
  enable: boolean;
  hasMegaMenu?: boolean;
  testimonial?: Testimonial;
  services?: Service;
  menus?: NavigationLink[];
}

// END MENU TYPE
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// START ABOUT US SECTION

// Type for each achievement item
type AchievementItem = {
  value: string;
  append_value: string;
  prepend_value: string;
  description: string;
};

// Type for the achievements section
type Achievements = {
  enable: boolean;
  list: AchievementItem[];
};

// Type for the banner image
type BannerImage = {
  src: string;
  alt: string;
};

// Type for the banner section
type Banner = {
  enable: boolean;
  image: BannerImage;
  video: VideoConfig;
};

// END ABOUT US SECTION
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// START ACHIEVEMENTS SECTION

type StatsBlock = {
  enable: boolean;
  list: StatItem[];
};

type FeatureList = {
  icon: string;
  title: string;
  description: string;
};

type StatItem = {
  value: string;
  title: string;
  description: string;
};

// END ACHIEVEMENTS SECTION
// ----------------------------------------------------------------------
