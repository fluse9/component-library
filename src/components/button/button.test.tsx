import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
    test('renders with default props', () => {
        render(<Button>Hello</Button>);
        const buttonElement = screen.getByText('Hello');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe('BUTTON');
        expect(buttonElement).toHaveStyle('background-color: #000000');
        expect(buttonElement).toHaveStyle('color: #fff');
    });

    test('renders with custom props', () => {
        render(
            <Button backgroundColor="#4665AE" color="#fff" className="rounded">
                Click Me
            </Button>
        );
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('rounded');
        expect(buttonElement).toHaveStyle('background-color: #4665AE');
        expect(buttonElement).toHaveStyle('color: #fff');
    });

    test('renders with innerStyles', () => {
        render(
            <Button
                innerStyles={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                }}
            >
                Styled Button
            </Button>
        );
        const buttonElement = screen.getByText('Styled Button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle('font-weight: bold');
        expect(buttonElement).toHaveStyle('text-decoration: underline');
    });

    test('renders with innerAttributes', () => {
        render(
            <Button innerAttributes={{ disabled: true }}>
                Disabled Button
            </Button>
        );
        const buttonElement = screen.getByText('Disabled Button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();
    });
});
