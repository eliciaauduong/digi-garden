module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");

  eleventyConfig.addPlugin(
    require('@photogabble/eleventy-plugin-interlinker'),
    {
      defaultLayout: 'layouts/embed.liquid'
    }
  );

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLL dd, yyyy");
  });

  eleventyConfig.addFilter("readTime", (content) => {
    const text = content.replace(/(<([^>]+)>)/gi, ""); // strip HTML tags
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 200); // ~200 wpm average
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

