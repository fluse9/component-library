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
    children?: ReactNode;
    innerAttributes?: Partial<ButtonAttributes>;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
}

type StyledButtonProps = StyledComponentPropsWithRef<'button'> & ButtonProps;

const StyledButton = styled.button<StyledButtonProps>`
    background-color: #f0f0f0;
    color: #333;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    ${({ innerStyles }) => innerStyles};
`;

const Button: FC<ButtonProps> = ({
    children,
    innerAttributes,
    innerStyles,
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
            innerAttributes={buttonAttributes}
            innerStyles={innerStyles}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
