import React from 'react';
import { render, screen } from '@testing-library/react';
import Anchor from '.';

describe('Anchor', () => {
    test('renders with default props', () => {
        render(<Anchor>Hello</Anchor>);
        const anchorElement = screen.getByText('Hello');
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement.tagName).toBe('A');
        expect(anchorElement).toHaveStyle('color: #4665AE');
    });

    test('renders with custom props', () => {
        render(
            <Anchor color="#FF0000" className="custom-anchor">
                Click Me
            </Anchor>
        );
        const anchorElement = screen.getByText('Click Me');
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement).toHaveClass('custom-anchor');
        expect(anchorElement).toHaveStyle({
            color: '#FF0000',
        });
    });

    test('renders with innerStyles', () => {
        render(
            <Anchor
                innerStyles={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                }}
            >
                Styled Anchor
            </Anchor>
        );
        const anchorElement = screen.getByText('Styled Anchor');
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement).toHaveStyle({
            fontWeight: 'bold',
        });
        expect(anchorElement).toHaveStyle({
            textDecoration: 'underline',
        });
    });

    test('renders with innerAttributes', () => {
        render(
            <Anchor innerAttributes={{ href: 'https://example.com' }}>
                External Link
            </Anchor>
        );
        const anchorElement = screen.getByText('External Link');
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement).toHaveAttribute('href', 'https://example.com');
    });
});
