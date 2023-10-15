import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import Card from '.';

describe('Card Component', () => {
    test('renders with default props and styles', () => {
        render(<Card>Default Card</Card>);

        const cardElement = screen.getByText('Default Card');

        expect(cardElement).toHaveStyleRule('background', '#000000');
        expect(cardElement).toHaveStyleRule('border', '0.125rem solid #000000');
    });

    test('renders with custom props and styles', () => {
        render(
            <Card
                background="#FF5733"
                innerAttributes={{ className: 'rounded raised' }}
                innerStyles={{ fontSize: '20px' }}
            >
                Custom Card
            </Card>
        );

        const cardElement = screen.getByText('Custom Card');

        expect(cardElement).toHaveStyleRule('background', '#FF5733');
        expect(cardElement).toHaveStyleRule('font-size', '20px');

        expect(cardElement).toHaveClass('rounded');
        expect(cardElement).toHaveClass('raised');

        expect(cardElement).toHaveStyle({
            borderRadius: '1rem',
            boxShadow:
                '6px 6px 12px rgba(0,0,0,0.1), -6px -6px 12px rgba(255,255,255,0.8)',
        });
    });

    test('renders null child content', () => {
        render(<Card innerAttributes={{ 'data-testid': 'card' }} />);

        const cardElement = screen.getByTestId('card');

        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toBeEmptyDOMElement();
    });

    test('handles innerAttributes and interaction', () => {
        const clickHandler = jest.fn();

        render(
            <Card innerAttributes={{ onClick: clickHandler }}>
                Clickable Card
            </Card>
        );

        const card = screen.getByText('Clickable Card');

        expect(card).toBeInTheDocument();

        fireEvent.click(card);

        expect(clickHandler).toHaveBeenCalled();
    });
});
