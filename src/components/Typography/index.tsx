import React, { FC } from 'react';
import styled from 'styled-components';
import { Variant } from '../../types';
import getTypographyStyles from './getTypographyStyles';
import {
    StyledTypographyAttributes,
    StyledTypographyProps,
    TypographyProps,
} from './Typography.types';

const StyledTypography = styled.p.attrs<StyledTypographyProps>(
    ({ innerAttributes }): StyledTypographyAttributes => ({
        ...innerAttributes,
    })
)<StyledTypographyProps>`
    font-style: normal;
    color: ${({ color }) => color};
    ${({ variant }) => getTypographyStyles(variant ?? Variant.p)}
    ${({ innerStyles }) => innerStyles};

    &.italic {
        font-style: italic;
    }

    &.bold {
        font-weight: bold;
    }
`;

/**
 * Define the Typography component, a functional component that renders a styled body of text.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
 * @param variant - The variant for the typography.
 * @param color - Text color for the typography.
 * @param innerAttributes - Inner HTML attributes for the typography.
 * @param innerStyles - Inner CSS styles for the typography.
 * @param children - Child elements to be rendered inside the typography.
 *
 * @returns {FC} - The rendered Typography functional component.
 */
const Typography: FC<TypographyProps> = ({
    variant = Variant.p,
    color = '#FFFFFF',
    innerAttributes = {},
    innerStyles = {},
    children = null,
}) => (
    <StyledTypography
        variant={variant}
        color={color}
        innerAttributes={innerAttributes}
        innerStyles={innerStyles}
    >
        {children}
    </StyledTypography>
);

export default Typography;
