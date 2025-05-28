// This function is called during the build. All it does is remove the string `type="module"`
// from the built index.html. This is required in UXP, as javascript files will not be
// otherwise loaded.

module.exports = async (_targetOptions, indexHtmlContent) => {
    indexHtmlContent = indexHtmlContent.replace(/type="module"/g, '');
    return indexHtmlContent;
};
