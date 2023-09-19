import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '.';

describe('Button', () => {
    test('renders with default props, testing it in the DOM', () => {
        render(<Button>Hello</Button>);
        const buttonElement = screen.getByText('Hello');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe('BUTTON');
    });

    test('renders with default props, testing its styles', () => {
        const buttonElement = renderer.create(<Button>Hello</Button>).toJSON();
        expect(buttonElement).toHaveStyleRule('background', '#000000');
        expect(buttonElement).toHaveStyleRule('color', '#FFFFFF');
    });

    test('renders with custom props, testing it in the DOM', () => {
        render(
            <Button background="#4665AE" color="#FFFFFF" className="rounded">
                Click Me
            </Button>
        );
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('rounded');
    });

    test('renders with custom props, testing its styles', () => {
        const buttonElement = renderer
            .create(
                <Button
                    background="#4665AE"
                    color="#FFFFFF"
                    className="rounded"
                >
                    Click Me
                </Button>
            )
            .toJSON();
        expect(buttonElement).toHaveStyleRule('background', '#4665AE');
        expect(buttonElement).toHaveStyleRule('color', '#FFFFFF');
    });

    test('renders with hover effect', () => {
        const buttonElement = renderer
            .create(
                <Button
                    background="#4665AE"
                    color="#FFFFFF"
                    className="rounded"
                >
                    Click Me
                </Button>
            )
            .toJSON();
        expect(buttonElement).toHaveStyleRule('background', '#4665AE');
        expect(buttonElement).toHaveStyleRule('color', '#FFFFFF');
        expect(buttonElement).toHaveStyleRule('background', '#FFFFFF', {
            modifier: ':hover',
        });
        expect(buttonElement).toHaveStyleRule('color', '#4665AE', {
            modifier: ':hover',
        });
    });

    test('renders with innerStyles', () => {
        const clickHandler = jest.fn();

        render(
            <Button
                innerAttributes={{
                    onClick: clickHandler,
                }}
            >
                Click Me
            </Button>
        );
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement);
        expect(clickHandler).toBeCalledTimes(1);
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
        expect(buttonElement).toHaveStyle({
            fontWeight: 'bold',
            textDecoration: 'underline',
        });
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
