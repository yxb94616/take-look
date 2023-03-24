module.exports = {
  plguins: ["prettier-plugin-tailwindcss"],
  pluginSearchDirs: ["."],
  tailwindConfig: "./tailwind.config.js",
  printWidth: 80, // 每行文字数量达 100 字元就换到新的一行
  semi: true, // 每个语句的结尾不需要分号
  singleQuote: false, // 字串使用单引号，而不是双引号
  trailingComma: "all", // 如 Object、Array 内的元素不需要尾随逗号
};
