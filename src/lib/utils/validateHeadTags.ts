// Define the type for tag information
type TagInfo = {
  tag: string;
  [key: string]: any; // Other attributes can have any type
};

// Array of valid head tags
const validHeadTags: string[] = [
  "meta",
  "title",
  "link",
  "script",
  "base",
  "style",
  "noscript",
];

// Function to validate tags
const validateHeadTags = (tags: TagInfo[]) => {
  const invalidTags = tags.filter(({ tag }) => !validHeadTags.includes(tag));
  const validTags = tags.filter(({ tag }) => validHeadTags.includes(tag));

  if (invalidTags.length > 0) {
    console.error(
      "These invalid HTML tags can't be appended in the head tag - ",
      invalidTags,
    );
  }

  return validTags;
};

// Export the function
export default validateHeadTags;
