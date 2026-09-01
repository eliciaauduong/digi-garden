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

  // Custom collection for latest 3 pages
  eleventyConfig.addCollection("latestPages", function(collectionApi) {
    return collectionApi.getAll()
      // Filter out files without a title or excluded pages
      .filter(item => item.data.title && !item.data.eleventyExcludeFromCollections)
      // Sort by date descending (newest first)
      .sort((a, b) => b.date - a.date)
      // Grab only the top 3
      .slice(0, 3);
  });
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

