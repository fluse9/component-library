import React, { FC, ReactNode } from 'react';
import styled, {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import buttonAttributes from './buttonAttributes';
import setHtmlTagAttributes from '../../utilities/setHtmlTagAttributes';

type ButtonAttributes = typeof buttonAttributes;

interface ButtonProps {
    backgroundColor?: string;
    children?: ReactNode;
    className?: string;
    color?: string;
    innerAttributes?: Partial<ButtonAttributes>;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
}

type StyledButtonProps = StyledComponentPropsWithRef<'button'> & ButtonProps;

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: 0.125rem solid ${({ backgroundColor }) => backgroundColor};
    border-radius: 0.25rem;
    color: ${({ color }) => color};
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: all 0.25s ease-in-out;
    ${({ innerStyles }) => innerStyles};

    &.rounded {
        border-radius: 1rem;
    }

    &:hover {
        background-color: ${({ color }) => color};
        color: ${({ backgroundColor }) => backgroundColor};
    }
`;

/**
 * Define the Button component, a functional component that renders a styled button.
 * It accepts various props for customization and uses a state variable for inner attributes.
 * @param backgroundColor - Background color for the button.
 * @param children - Child elements to be rendered inside the button.
 * @param className - CSS class name for additional styling.
 * @param color - Text color for the button.
 * @param innerAttributes - Inner HTML attributes for the button.
 * @param innerStyles - Inner CSS styles for the button.
 */
const Button: FC<ButtonProps> = ({
    backgroundColor = '#000000',
    children = null,
    className = '',
    color = '#fff',
    innerAttributes = {},
    innerStyles = {},
}) => {
    const derivedButtonAttributes = setHtmlTagAttributes(
        buttonAttributes,
        innerAttributes
    );

    return (
        <StyledButton
            backgroundColor={backgroundColor}
            color={color}
            className={className}
            innerAttributes={derivedButtonAttributes}
            innerStyles={innerStyles}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
