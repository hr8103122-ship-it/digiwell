import nextConfig from "eslint-config-next";
import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];

export default eslintConfig;
