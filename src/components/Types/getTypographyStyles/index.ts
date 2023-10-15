import { CSSObject } from 'styled-components';
import { Variant } from '../../../types';

interface TypographyStyles {
    [key: string]: CSSObject;
}

const styles: TypographyStyles = {
    [Variant.p]: {
        fontSize: '1rem',
        fontWeight: 'normal',
    },
    [Variant.h1]: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    [Variant.h2]: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    [Variant.h3]: {
        fontSize: '1.17rem',
        fontWeight: 'bold',
    },
    [Variant.h4]: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    [Variant.h5]: {
        fontSize: '0.83rem',
        fontWeight: 'bold',
    },
    [Variant.h6]: {
        fontSize: '0.67rem',
        fontWeight: 'bold',
    },
};

/**
 * Gets the appropriate CSS styles for the given typography variant.
 *
 * @param {Variant} variant - The variant of the typography.
 *
 * @returns {CSSObject} - The CSS styles for the given typography variant.
 */
const getTypographyStyles = (variant: Variant): CSSObject => styles?.[variant];

export default getTypographyStyles;
