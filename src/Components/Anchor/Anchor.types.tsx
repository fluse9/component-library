import { ReactNode } from 'react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import { DataTestId } from '../../Types';

type StyledAnchorAttributes = StyledComponentPropsWithRef<'a'> & DataTestId;

interface AnchorProps {
    color?: string;
    innerAttributes?: StyledAnchorAttributes;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
    children?: ReactNode;
}

type StyledAnchorProps = StyledComponentPropsWithRef<'a'> & AnchorProps;

export { AnchorProps, StyledAnchorAttributes, StyledAnchorProps };
