import { ReactNode } from 'react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId, Variant } from '../../typ';

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

export { StyledTypographyAttributes, StyledTypographyProps, TypographyProps };
