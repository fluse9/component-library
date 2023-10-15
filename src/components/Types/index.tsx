import React, { FC, ReactNode } from 'react';
import styled, {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId, Variant } from '../../types';
import getTypographyStyles from './getTypographyStyles';

type StyledTypographyComponentPropsWithRef = StyledComponentPropsWithRef<'p'> &
    StyledComponentPropsWithRef<'h1'> &
    StyledComponentPropsWithRef<'h2'> &
    StyledComponentPropsWithRef<'h3'> &
    StyledComponentPropsWithRef<'h4'> &
    StyledComponentPropsWithRef<'h5'> &
    StyledComponentPropsWithRef<'h6'>;

type StyledTypographyAttributes = StyledTypographyComponentPropsWithRef &
    DataTestId;

interface TypographyProps {
    variant?: Variant;
    color?: string;
    innerAttributes?: StyledTypographyAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledTypographyProps = StyledComponentPropsWithRef<'p'> & TypographyProps;

const StyledTypography = styled.p.attrs<StyledTypographyProps>(
    ({ innerAttributes }): StyledComponentPropsWithRef<'p'> => ({
        ...innerAttributes,
    })
)<StyledTypographyProps>`
    color: ${({ color }) => color};
    ${({ variant }) => getTypographyStyles(variant ?? Variant.p)}
    ${({ innerStyles }) => innerStyles};

    &.italic {
        font-style: italic;
    }

    &:bold {
        font-weight: 700;
    }
`;

/**
 * Define the Typography component, a functional component that renders a styled body of text.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
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
