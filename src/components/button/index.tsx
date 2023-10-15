import React, { FC, ReactNode } from 'react';
import styled, {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId } from '../../types';

type StyledButtonAttributes = StyledComponentPropsWithRef<'button'> &
    DataTestId;

interface ButtonProps {
    background?: string;
    color?: string;
    innerAttributes?: StyledButtonAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledButtonProps = StyledComponentPropsWithRef<'button'> & ButtonProps;

const StyledButton = styled.button.attrs<StyledButtonProps>(
    ({ innerAttributes }): StyledComponentPropsWithRef<'button'> => ({
        ...innerAttributes,
    })
)<StyledButtonProps>`
    background: ${({ background }) => background};
    border: 0.125rem solid ${({ background }) => background};
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
        background: ${({ color }) => color};
        color: ${({ background }) => background};
    }
`;

/**
 * Define the Button component, a functional component that renders a styled button.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
 * @param background - Background color for the button.
 * @param color - Text color for the button.
 * @param innerAttributes - Inner HTML attributes for the button.
 * @param innerStyles - Inner CSS styles for the button.
 * @param children - Child elements to be rendered inside the button.
 *
 * @returns {FC} - The rendered Button functional component.
 */
const Button: FC<ButtonProps> = ({
    background = '#000000',
    color = '#FFFFFF',
    innerAttributes = {},
    innerStyles = {},
    children = null,
}) => (
    <StyledButton
        background={background}
        color={color}
        innerAttributes={innerAttributes}
        innerStyles={innerStyles}
    >
        {children}
    </StyledButton>
);

export default Button;
