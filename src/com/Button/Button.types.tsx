import { ReactNode } from 'react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId } from '../../typ';

type StyledButtonAttributes = StyledComponentPropsWithRef<'button'> &
    DataTestId;

interface ButtonProps {
    background?: string;
    color?: string;
    innerAttributes?: StyledButtonAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledButtonProps = StyledComponentPropsWithRef<'button'> & ButtonProps;

export { ButtonProps, StyledButtonAttributes, StyledButtonProps };
