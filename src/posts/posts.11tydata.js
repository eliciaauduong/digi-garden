module.exports = {
  layout: "base.njk",
  eleventyComputed: {
    date: (data) => {
      // Keep hardcoded frontmatter dates (e.g. date: 2026-01-01) if present
      if (data.date && data.date !== "gitLastUpdated") {
        return data.date;
      }
      return "gitLastUpdated";
    }
  }
};