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
