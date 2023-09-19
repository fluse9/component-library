import React, { ReactNode } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import Card from '.';

type CardProps = {
    background?: string;
    children?: ReactNode;
    className?: string;
    innerAttributes?: StyledComponentPropsWithRef<'div'>;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
};

export default {
    title: 'components/card',
    component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Rounded = Template.bind({});
Rounded.args = {
    background: '#FFFFFF',
    children: 'Rounded Card',
    className: 'rounded',
    innerAttributes: {
        onClick: () => console.log('test'),
    },
};

export const Raised = Template.bind({});
Raised.args = {
    background: '#FFFFFF',
    children: 'Raised Card',
    className: 'raised',
    innerAttributes: {
        onClick: () => console.log('test'),
    },
};

export const RaisedAndRounded = Template.bind({});
RaisedAndRounded.args = {
    background: '#FFFFFF',
    children: 'Raised and Rounded Card',
    className: 'raised rounded',
    innerAttributes: {
        onClick: () => console.log('test'),
    },
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
    children: 'Custom Styles',
    innerStyles: {
        background: '#FF9800',
        color: '#FFFFFF',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
        padding: '0.75rem 1rem',
        boxShadow: '0.125rem #C8C8C9',
    },
};
