import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled, {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import ANCHOR_ATTRIBUTES from './anchorAttributes';
import setHtmlTagAttributes from '../../utilities/setHtmlTagAttributes';

type AnchorAttributes = typeof ANCHOR_ATTRIBUTES;

interface AnchorProps {
    children?: ReactNode;
    className?: string;
    color?: string;
    innerAttributes?: Partial<AnchorAttributes>;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
}

type StyledAnchorProps = StyledComponentPropsWithRef<'a'> & AnchorProps;

const StyledAnchor = styled.a<StyledAnchorProps>`
    color: ${({ color }) => color};
    cursor: pointer;
    ${({ innerStyles }) => innerStyles};
`;

/**
 * Anchor component is a functional component that renders a styled anchor.
 * @param children - Child elements to be rendered inside the anchor.
 * @param className - CSS class name for additional styling.
 * @param color - Text color for the anchor.
 * @param innerAttributes - Inner HTML attributes for the anchor.
 * @param innerStyles - Inner CSS styles for the anchor.
 */
const Anchor: FC<AnchorProps> = ({
    children = null,
    className = '',
    color = '#4665AE',
    innerAttributes = {},
    innerStyles = {},
}) => {
    const [anchorAttributes, setAnchorAttributes] = useState({});

    useEffect(() => {
        const handleAnchorAttributes = () => {
            const reducedAnchorAttributes = setHtmlTagAttributes(
                ANCHOR_ATTRIBUTES,
                innerAttributes
            );
            setAnchorAttributes(reducedAnchorAttributes);
        };

        handleAnchorAttributes();
    }, [innerAttributes]);

    return (
        <StyledAnchor
            color={color}
            className={className}
            innerAttributes={anchorAttributes}
            innerStyles={innerStyles}
        >
            {children}
        </StyledAnchor>
    );
};

export default Anchor;
