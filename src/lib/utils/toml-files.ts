import parseTomlToJson from "./parseTomlToJson";
const config = parseTomlToJson("./src/config/config.toml");

export { config };
