import React, { ReactNode } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';
import BUTTON_ATTRIBUTES from './buttonAttributes';
import Button from '.';

type ButtonAttributes = typeof BUTTON_ATTRIBUTES;

type ButtonProps = {
    children?: ReactNode;
    innerAttributes?: Partial<ButtonAttributes>;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
};

export default {
    title: 'components/button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    innerAttributes: {
        onClick: () => console.log('test'),
    },
    innerStyles: {
        backgroundColor: '#4665AE',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px 1px #C8C8C9',
        color: '#fff',
    },
};
