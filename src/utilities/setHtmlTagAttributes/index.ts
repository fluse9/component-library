type HtmlTagAttributes = Record<string, any>;

/**
 * Sets the attributes of an HTML tag given an object with all the possible attributes and an object with the attributes to set
 * @param {HtmlTagAttributes} htmlTagAttributeTypes An object with all the prop types of the possible attributes for the HTML tag
 * @param {HtmlTagAttributes} htmlTagAttributesToSet An object with the particular attributes to set on the HTML tag
 * @returns {HtmlTagAttributes} An object with the attributes that were set for the HTML tag
 */
const setHtmlTagAttributes = (
    htmlTagAttributeTypes: HtmlTagAttributes = {},
    htmlTagAttributesToSet: HtmlTagAttributes = {}
): HtmlTagAttributes => {
    const reducedHtmlTagAttributes = Object?.keys(
        htmlTagAttributeTypes
    )?.reduce((attributes, key) => {
        let derivedAttributes = { ...attributes };
        if (htmlTagAttributesToSet?.[key]) {
            derivedAttributes = {
                ...attributes,
                [key]: htmlTagAttributesToSet?.[key],
            };
        }
        return derivedAttributes;
    }, {});

    return reducedHtmlTagAttributes;
};

export default setHtmlTagAttributes;
