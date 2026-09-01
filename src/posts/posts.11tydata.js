const { execSync } = require("child_process");

module.exports = {
  layout: "base.njk",
  eleventyComputed: {
    date: (data) => {
      // Keep hardcoded frontmatter dates (e.g., date: 2026-01-01) if present
      if (data.date && data.date !== "gitLastUpdated") {
        return data.date;
      }

      try {
        // Fetch last git commit date for the current file
        const gitDate = execSync(
          `git log -1 --format=%cd --date=iso "${data.page.inputPath}"`
        )
          .toString()
          .trim();

        return gitDate ? new Date(gitDate) : new Date();
      } catch (e) {
        return new Date(); // Fallback if git fails on CI
      }
    }
  }
};