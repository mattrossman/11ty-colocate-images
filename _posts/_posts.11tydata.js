module.exports = {
  tags: ["blog"],
  layout: "base",
  permalink: (data) => `/blog/${data?.page?.fileSlug}/`,
}
