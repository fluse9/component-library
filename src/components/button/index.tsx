import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled, {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import BUTTON_ATTRIBUTES from './buttonAttributes';
import setHtmlTagAttributes from '../../utilities/setHtmlTagAttributes';

type ButtonAttributes = typeof BUTTON_ATTRIBUTES;

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
    transition: all 0.25s ease-in-out'

    &.rounded {
        border-radius: 1rem;
    }

    &:hover {
        background-color: ${({ color }) => color};
        color: ${({ backgroundColor }) => backgroundColor};
    }

    ${({ innerStyles }) => innerStyles};
`;

const Button: FC<ButtonProps> = ({
    backgroundColor = '#000000',
    children = null,
    className = '',
    color = '#fff',
    innerAttributes = {},
    innerStyles = {},
}) => {
    const [buttonAttributes, setButtonAttributes] = useState({});

    useEffect(() => {
        const handleButtonAttributes = () => {
            const reducedButtonAttributes = setHtmlTagAttributes(
                BUTTON_ATTRIBUTES,
                innerAttributes
            );
            setButtonAttributes(reducedButtonAttributes);
        };

        handleButtonAttributes();
    }, [innerAttributes]);

    return (
        <StyledButton
            backgroundColor={backgroundColor}
            color={color}
            className={className}
            innerAttributes={buttonAttributes}
            innerStyles={innerStyles}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
