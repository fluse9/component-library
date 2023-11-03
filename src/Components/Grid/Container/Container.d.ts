import { ReactNode } from 'react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId } from '../../../Types';

type StyledContainerAttributes = StyledComponentPropsWithRef<'div'> &
    DataTestId;

interface ContainerProps {
    direction?: string;
    wrap?: string;
    justifyContent?: string;
    alignItems?: string;
    spacing?: number;
    innerAttributes?: StyledContainerAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledContainerProps = StyledComponentPropsWithRef<'div'> & ContainerProps;

export { ContainerProps, StyledContainerAttributes, StyledContainerProps };
