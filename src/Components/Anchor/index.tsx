import React, { FC } from 'react';
import styled from 'styled-components';
import {
    StyledAnchorProps,
    StyledAnchorAttributes,
    AnchorProps,
} from './Anchor';

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
