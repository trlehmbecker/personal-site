module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("pdf");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
