import React, { FC, ReactNode } from 'react';
import styled, {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId } from '../../types';

type StyledAnchorAttributes = StyledComponentPropsWithRef<'a'> & DataTestId;

interface AnchorProps {
    color?: string;
    innerAttributes?: StyledAnchorAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledAnchorProps = StyledComponentPropsWithRef<'a'> & AnchorProps;

const StyledAnchor = styled.a.attrs<StyledAnchorProps>(
    ({ innerAttributes }): StyledAnchorAttributes => ({
        ...innerAttributes,
    })
)<StyledAnchorProps>`
    color: ${({ color }) => color};
    cursor: pointer;
    ${({ innerStyles }) => innerStyles};
`;

/**
 * Anchor component is a functional component that renders a styled anchor.
 *
 * @param color - Text color for the anchor.
 * @param innerAttributes - Inner HTML attributes for the anchor.
 * @param innerStyles - Inner CSS styles for the anchor.
 * @param children - Child elements to be rendered inside the anchor.
 *
 * @returns {FC} - The rendered Anchor component.
 */
const Anchor: FC<AnchorProps> = ({
    color = '#4665AE',
    innerAttributes = {},
    innerStyles = {},
    children = null,
}) => (
    <StyledAnchor
        color={color}
        innerAttributes={innerAttributes}
        innerStyles={innerStyles}
    >
        {children}
    </StyledAnchor>
);

export default Anchor;
