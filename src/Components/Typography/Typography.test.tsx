import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Typography from '.';
import { Variant } from '../../Types';

describe('Typography Component', () => {
    test('renders with default props and styles', () => {
        render(<Typography>Default Text</Typography>);

        const textElement = screen.getByText('Default Text');

        expect(textElement).toHaveStyle({
            fontStyle: 'normal',
            fontSize: '1rem',
            fontWeight: 'normal',
            color: '#FFFFFF',
        });
    });

    test('renders with custom props and styles', () => {
        render(
            <Typography
                variant={Variant.h2}
                color="#FF5733"
                innerAttributes={{ className: 'italic' }}
                innerStyles={{ fontSize: '20px' }}
            >
                Custom Text
            </Typography>
        );

        const textElement = screen.getByText('Custom Text');

        expect(textElement).toHaveClass('italic');
        expect(textElement).toHaveStyle({
            fontStyle: 'italic',
            fontSize: '20px',
            color: '#FF5733',
        });
    });

    test('renders with bold class', () => {
        render(
            <Typography innerAttributes={{ className: 'bold' }}>
                Bold Text
            </Typography>
        );

        const textElement = screen.getByText('Bold Text');

        expect(textElement).toHaveStyle({
            fontWeight: 'bold',
        });
    });

    test('renders with italic class', () => {
        render(
            <Typography innerAttributes={{ className: 'italic' }}>
                Italic Text
            </Typography>
        );

        const textElement = screen.getByText('Italic Text');

        expect(textElement).toHaveStyle({
            fontStyle: 'italic',
        });
    });

    test('renders null child content', () => {
        render(<Typography innerAttributes={{ 'data-testid': 'text' }} />);

        const textElement = screen.getByTestId('text');

        expect(textElement).toBeInTheDocument();
        expect(textElement).toBeEmptyDOMElement();
    });
});
