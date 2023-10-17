import { ReactNode } from 'react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId } from '../../Types';

type StyledCardAttributes = StyledComponentPropsWithRef<'div'> & DataTestId;

interface CardProps {
    background?: string;
    innerAttributes?: StyledCardAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledCardProps = StyledComponentPropsWithRef<'div'> & CardProps;

export { CardProps, StyledCardAttributes, StyledCardProps };
