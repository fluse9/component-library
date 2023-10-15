import getTypographyStyles from '.';
import { Variant } from '../../../typ';

describe('getTypographyStyles', () => {
    test('should return styles for the "p" variant', () => {
        const styles = getTypographyStyles(Variant.p);
        expect(styles).toMatchObject({
            fontSize: '1rem',
            fontWeight: 'normal',
        });
    });

    test('should return styles for the "h1" variant', () => {
        const styles = getTypographyStyles(Variant.h1);
        expect(styles).toMatchObject({
            fontSize: '2.5rem',
            fontWeight: 'bold',
        });
    });

    test('should return styles for the "h2" variant', () => {
        const styles = getTypographyStyles(Variant.h2);
        expect(styles).toMatchObject({
            fontSize: '2rem',
            fontWeight: 'bold',
        });
    });

    test('should return styles for the "h3" variant', () => {
        const styles = getTypographyStyles(Variant.h3);
        expect(styles).toMatchObject({
            fontSize: '1.75rem',
            fontWeight: 'bold',
        });
    });

    test('should return styles for the "h4" variant', () => {
        const styles = getTypographyStyles(Variant.h4);
        expect(styles).toMatchObject({
            fontSize: '1.5rem',
            fontWeight: 'bold',
        });
    });

    test('should return styles for the "h5" variant', () => {
        const styles = getTypographyStyles(Variant.h5);
        expect(styles).toMatchObject({
            fontSize: '1.25rem',
            fontWeight: 'bold',
        });
    });

    test('should return styles for the "h6" variant', () => {
        const styles = getTypographyStyles(Variant.h6);
        expect(styles).toMatchObject({
            fontSize: '1.125rem',
            fontWeight: 'bold',
        });
    });

    test('should return undefined for an unknown variant', () => {
        const styles = getTypographyStyles(
            'unknownVariant' as unknown as Variant
        );
        expect(styles).toBeUndefined();
    });
});
