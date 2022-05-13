/**
 * @typedef {import("@11ty/eleventy/src/UserConfig")} EleventyConfig
 * @typedef {ReturnType<import("@11ty/eleventy/src/defaultConfig")>} EleventyReturnValue
 *
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
  /**
   * Registers images as template formats so they are copied to output.
   * Issue: permalink from directory data file is not respected.
   */
  eleventyConfig.addTemplateFormats(["jpg"])
}
