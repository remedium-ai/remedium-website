import parseTomlToJson from "../../../src/lib/utils/parseTomlToJson";
const config = parseTomlToJson("./src/config/config.toml");

/**
 * Add a trailing slash to the url if trailing_slash option true from config.toml else remove the trailing slash if present.
 *
 * @param url The url to be checked.
 * @returns The url with or without a trailing slash appended to it depending on the config.
 */
const trailingSlashChecker = (url: string): string => {
  // Separate the URL path from the fragment (if any)
  const [urlPath, fragment] = url.split("#");

  // Determine if we need to add or remove a trailing slash
  const hasTrailingSlash = urlPath.endsWith("/");
  const shouldHaveTrailingSlash = config.site.trailing_slash;

  // Adjust the URL path based on the trailing slash rule
  const adjustedPath = shouldHaveTrailingSlash
    ? hasTrailingSlash
      ? urlPath
      : `${urlPath}/`
    : hasTrailingSlash
      ? urlPath.slice(0, -1)
      : urlPath;

  // Reattach the fragment if it exists
  const fullURL = fragment ? `${adjustedPath}#${fragment}` : adjustedPath;

  return fullURL as string;
};

export default trailingSlashChecker;
