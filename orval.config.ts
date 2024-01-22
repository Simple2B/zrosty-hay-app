import { defineConfig } from "orval";

module.exports = defineConfig({
  base: {
    input: "./openapi.json",
    output: {
      baseUrl: "https://api.zrosty-hay.simple2b.net",
      target: "./src/api/zrosty_hay.ts",
      client: "react-query",
      mode: "tags-split",
      schemas: "src/api/model",
      mock: true,
    },
  },
});
