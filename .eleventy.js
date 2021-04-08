const htmlmin = require("html-minifier");
module.exports = function (eleventyConfig) {
  // Copy `src/assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("src/assets");

  // Check environment
  if (process.env.NODE_ENV === "production") {
    // minify html for production
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      if (outputPath.endsWith(".html") || outputPath.endsWith(".md")) {
        return htmlmin.minify(content, {
          collapseWhitespace: true,
          removeComments: true,
          useShortDoctype: true,
        });
      }
      return content;
    });

    // Production output directory: _site
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  } else {
    // Development output directory
    return {
      dir: {
        input: "src",
        output: "_temp",
      },
    };
  }
};
