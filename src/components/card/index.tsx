import React, { FC, ReactNode } from 'react';
import styled, {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId } from '../../types';

type StyledCardAttributes = StyledComponentPropsWithRef<'div'> & DataTestId;

interface CardProps {
    background?: string;
    innerAttributes?: StyledCardAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledCardProps = StyledComponentPropsWithRef<'div'> & CardProps;

const StyledCard = styled.div.attrs<StyledCardProps>(
    ({ innerAttributes }): StyledCardAttributes => ({
        ...innerAttributes,
    })
)<StyledCardProps>`
    background: ${({ background }) => background};
    border: 0.125rem solid ${({ background }) => background};
    border-radius: 0.25rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    ${({ innerStyles }) => innerStyles};

    &.rounded {
        border-radius: 1rem;
    }

    &.raised {
        box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1),
            -6px -6px 12px rgba(255, 255, 255, 0.8);
    }
`;

/**
 * Define the Card component, a functional component that renders a styled card.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
 * @param background - Background color for the card.
 * @param innerAttributes - Inner HTML attributes for the card.
 * @param innerStyles - Inner CSS styles for the card.
 * @param children - Child elements to be rendered inside the card.
 *
 * @returns {FC} - The rendered Card component.
 */
const Card: FC<CardProps> = ({
    background = '#000000',
    children = null,
    innerAttributes = {},
    innerStyles = {},
}) => (
    <StyledCard
        background={background}
        innerAttributes={innerAttributes}
        innerStyles={innerStyles}
    >
        {children}
    </StyledCard>
);

export default Card;
