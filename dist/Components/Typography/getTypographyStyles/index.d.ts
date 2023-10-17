import { CSSObject } from 'styled-components';
import { Variant } from '../../../Types';
/**
 * Gets the appropriate CSS styles for the given typography variant.
 *
 * @param {Variant} variant - The variant of the typography.
 *
 * @returns {CSSObject} - The CSS styles for the given typography variant.
 */
declare const getTypographyStyles: (variant: Variant) => CSSObject;
export default getTypographyStyles;
